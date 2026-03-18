// ============================================================
//  DASHBOARD PÁSCOA — APP.JS
//  Versão TV: evolução correta de Dentro x Fora
// ============================================================

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#888';

let chartInstances = {};
let rankMetric = 'itens';
let currentSection = 'visao-geral';

function fmt(n) {
  if (typeof n !== 'number') return n;
  return n.toLocaleString('pt-BR');
}

function fmtR(n, d = 2) {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  });
}

function fmtPct(n, d = 1) {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  }) + '%';
}

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

function animateCounters() {
  document.querySelectorAll('.kpi-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;

    const duration = 900;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = fmt(current);
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      const sectionId = item.dataset.section;
      currentSection = sectionId;

      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(sectionId);
      if (target) {
        target.classList.add('active');
        renderSection(sectionId);
      }
    });
  });
}

function renderSection(id) {
  switch (id) {
    case 'visao-geral':
      renderVisaoGeral();
      break;
    case 'visao-operacional':
      renderVisaoOperacional();
      break;
    case 'ranking':
      renderRanking();
      break;
    case 'produtos-campanha':
      renderProdutosCampanha();
      break;
    case 'operacional-crm':
      renderCRM();
      break;
  }

  setTimeout(animateCounters, 100);
}

/**
 * Série completa 01/03 a 17/03
 * Antes de 13/03:
 * - Dentro = 0
 * - Fora = total do dia
 */
function getFullCampaignSeries() {
  const campaignMap = Object.fromEntries(
    EVOLUCAO_DIARIA_CAMPANHA.map(d => [d.data, d])
  );

  const labels = EVOLUCAO_DIARIA_GERAL.map(d => d.data);

  return {
    labels,

    dentroQtd: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.qtd ?? 0),
    dentroTickets: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.tickets ?? 0),
    dentroClientes: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.clientes ?? 0),

    foraQtd: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.qtd ?? d.qtd),
    foraTickets: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.tickets ?? d.cupons),
    foraClientes: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.clientes ?? d.clientes),

    totalQtd: EVOLUCAO_DIARIA_GERAL.map(d => d.qtd),
    totalTickets: EVOLUCAO_DIARIA_GERAL.map(d => d.cupons),
    totalClientes: EVOLUCAO_DIARIA_GERAL.map(d => d.clientes)
  };
}

// ═══════════════════════════════════════════════════════════════
//  VISÃO GERAL
// ═══════════════════════════════════════════════════════════════
function renderVisaoGeral() {
  buildPodio();
  buildChartEvolucaoGeral();
  buildDonutCampanha();
}

function buildPodio() {
  const grid = document.getElementById('podioGrid');
  if (!grid) return;

  const medals = ['🥇', '🥈', '🥉'];
  const bars = ['podio-bar-1', 'podio-bar-2', 'podio-bar-3'];

  grid.innerHTML = PODIO_TOP3.map((item, i) => `
    <div class="podio-item podio-${i + 1}">
      <div class="podio-img-wrap ${i === 0 ? 'podio-img-crown' : ''}">
        ${i === 0 ? '<div class="crown-icon">👑</div>' : ''}
        ${
          item.img
            ? `<img src="${item.img}" alt="${item.nome}" class="podio-product-img" onerror="this.style.display='none'" />`
            : `<div class="product-img-placeholder">🍫</div>`
        }
      </div>
      <div class="podio-medal">${medals[i]}</div>
      <div class="podio-bar ${bars[i]}"></div>
      <div class="podio-info">
        <strong>${item.nome}</strong>
        <span class="podio-qty">${fmt(item.itens)} itens</span>
        <span class="podio-clients">${fmt(item.clientes)} clientes</span>
      </div>
    </div>
  `).join('');
}

function buildChartEvolucaoGeral() {
  destroyChart('chartEvolucaoDiaria');
  const ctx = document.getElementById('chartEvolucaoDiaria');
  if (!ctx) return;

  const series = getFullCampaignSeries();

  chartInstances.chartEvolucaoDiaria = new
