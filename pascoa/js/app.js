// ============================================================
//  DASHBOARD PÁSCOA — APP.JS
//  Navigation, Charts (Chart.js — linha cores Páscoa), Tables
// ============================================================

/* ── Defaults para Chart.js ── */
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#888';

// ─── Instâncias de gráficos (para poder destruir ao navegar) ─────
let chartInstances = {};

// ─── Estado ──────────────────────────────────────────────────────
let rankMetric = 'itens';

// ─── Helpers ─────────────────────────────────────────────────────
function fmt(n) {
  if (typeof n !== 'number') return n;
  return n.toLocaleString('pt-BR');
}
function fmtR(n, d = 2) { return n.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d }); }
function fmtPct(n, d = 2) { return fmtR(n, d) + '%'; }

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

// ─── Counter Animation ───────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('.kpi-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
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

// ═══════════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════════
function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = item.dataset.section;
      // Update nav
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      // Show section
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

// ═══════════════════════════════════════════════════════════════
//  VISÃO GERAL
// ═══════════════════════════════════════════════════════════════
function renderVisaoGeral() {
  // Gráfico evolução diária — LINHA — cores Páscoa
  destroyChart('chartEvolucaoDiaria');
  const ctxEvol = document.getElementById('chartEvolucaoDiaria');
  if (ctxEvol) {
    const labels = EVOLUCAO_DIARIA_CAMPANHA.map(d => d.data);
    chartInstances['chartEvolucaoDiaria'] = new Chart(ctxEvol, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Clientes na Campanha',
            data: EVOLUCAO_DIARIA_CAMPANHA.map(d => d.clientes),
            borderColor: PALETA.lilac,
            backgroundColor: PALETA.lilacBg,
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: PALETA.lilac,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            cubicInterpolationMode: 'monotone',
            tension: 0.42,
            fill: true
          },
          {
            label: 'Itens Vendidos (Campanha)',
            data: EVOLUCAO_DIARIA_CAMPANHA.map(d => d.itens),
            borderColor: PALETA.pink,
            backgroundColor: PALETA.pinkBg,
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: PALETA.pink,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            cubicInterpolationMode: 'monotone',
            tension: 0.42,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, padding: 14, font: { size: 11, weight: '600' } } },
          tooltip: {
            backgroundColor: 'rgba(61,26,0,0.9)',
            titleColor: '#fff',
            bodyColor: '#f5ead8',
            padding: 10,
            cornerRadius: 10
          }
        },
        scales: {
          x: { grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false }, ticks: { font: { size: 11, weight: '600' } } },
          y: {
            grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
            beginAtZero: true,
            grace: '8%',
            ticks: { font: { size: 11 }, callback: v => fmt(v) }
          }
        }
      }
    });
  }

  // Donut clientes Dentro vs Fora
  destroyChart('chartDonutClientes');
  const ctxDonut = document.getElementById('chartDonutClientes');
  if (ctxDonut) {
    chartInstances['chartDonutClientes'] = new Chart(ctxDonut, {
      type: 'doughnut',
      data: {
        labels: [`Dentro (${fmt(TOTAIS.clientesDentro)})`, `Fora (${fmt(TOTAIS.clientesFora)})`],
        datasets: [{
          data: [TOTAIS.clientesDentro, TOTAIS.clientesFora],
          backgroundColor: [PALETA.lilac, '#f5ead8'],
          borderColor: ['#fff', '#fff'],
          borderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(61,26,0,0.9)',
            callbacks: {
              label: ctx => ` ${fmt(ctx.parsed)} clientes (${fmtPct(ctx.parsed / (TOTAIS.clientesDentro + TOTAIS.clientesFora) * 100, 1)})`
            }
          }
        }
      }
    });
  }
}

// ═══════════════════════════════════════════════════════════════
//  VISÃO OPERACIONAL
// ═══════════════════════════════════════════════════════════════
function renderVisaoOperacional() {
  // Gráfico de linha: clientes e itens por dia (campanha)
  destroyChart('chartOpDiario');
  const ctxOp = document.getElementById('chartOpDiario');
  if (ctxOp) {
    const labels = EVOLUCAO_DIARIA_CAMPANHA.map(d => d.data);
    chartInstances['chartOpDiario'] = new Chart(ctxOp, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Clientes (Dentro)',
            data: EVOLUCAO_DIARIA_CAMPANHA.map(d => d.clientes),
            borderColor: PALETA.lilac,
            backgroundColor: PALETA.lilacBg,
            borderWidth: 3,
            pointRadius: 7,
            pointBackgroundColor: PALETA.lilac,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.3,
            fill: true
          },
          {
            label: 'Itens Vendidos (Campanha)',
            data: EVOLUCAO_DIARIA_CAMPANHA.map(d => d.itens),
            borderColor: PALETA.orange,
            backgroundColor: PALETA.orangeBg,
            borderWidth: 3,
            pointRadius: 7,
            pointBackgroundColor: PALETA.orange,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, padding: 14, font: { size: 12 } } },
          tooltip: {
            backgroundColor: 'rgba(61,26,0,0.9)',
            titleColor: '#fff',
            bodyColor: '#f5ead8',
            padding: 10,
            cornerRadius: 10,
            callbacks: { label: ctx => ` ${fmt(ctx.parsed.y)}` }
          }
        },
        scales: {
          x: { grid: { color: 'rgba(0,0,0,0.04)' } },
          y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => fmt(v) } }
        }
      }
    });
  }

  // Donut participação
  destroyChart('chartOpParticipacao');
  const ctxPart = document.getElementById('chartOpParticipacao');
  if (ctxPart) {
    chartInstances['chartOpParticipacao'] = new Chart(ctxPart, {
      type: 'doughnut',
      data: {
        labels: ['Atingidos', 'Gap'],
        datasets: [{
          data: [(TOTAIS.clientesDentro / TOTAIS.clientesTotal) * 100, 100 - ((TOTAIS.clientesDentro / TOTAIS.clientesTotal) * 100)],
          backgroundColor: [PALETA.lilac, '#f5ead8'],
          borderColor: ['#fff', '#fff'],
          borderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(61,26,0,0.9)',
            callbacks: { label: ctx => ` ${fmtPct(ctx.parsed, 1)}` }
          }
        }
      }
    });
  }

  // Tabelas de lojas por dia
  renderLojaTable('tbodyDia12', LOJAS_DIA12);
  renderLojaTable('tbodyDia13', LOJAS_DIA13);
  renderLojaTable('tbodyDia14', LOJAS_DIA14);
}

function renderLojaTable(tbodyId, data) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  if (!data || data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#bbb;padding:1rem;">Dados não disponíveis para este dia.</td></tr>';
    return;
  }
  tbody.innerHTML = data.map((row, i) => `
    <tr>
      <td><strong>${row.loja}</strong></td>
      <td>${fmt(row.clientes)}</td>
      <td>${fmt(row.cupons)}</td>
      <td>${fmt(row.itens)}</td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  RANKING
// ═══════════════════════════════════════════════════════════════
function renderRanking() {
  buildRankingChart(rankMetric);
  buildRankingTable(rankMetric);
  buildBestDayGrid();

  // Toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      rankMetric = btn.dataset.metric;
      buildRankingChart(rankMetric);
      buildRankingTable(rankMetric);
    });
  });
}

function buildRankingChart(metric) {
  destroyChart('chartRankingBar');
  const ctx = document.getElementById('chartRankingBar');
  if (!ctx) return;

  const sorted = [...RANKING_DENTRO].sort((a, b) => b[metric] - a[metric]);
  const labels = sorted.map(d => d.shortName);
  const values = sorted.map(d => d[metric]);
  const maxVal = Math.max(...values);

  const colors = [
    PALETA.lilac, PALETA.pink, PALETA.orange, PALETA.caramel,
    PALETA.mint, PALETA.choco,
    'rgba(232,160,32,0.6)', 'rgba(211,84,0,0.6)', 'rgba(230,126,34,0.6)'
  ];

  chartInstances['chartRankingBar'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: metric === 'itens' ? 'Quantidade Vendida' : 'Clientes Únicos',
        data: values,
        backgroundColor: colors.slice(0, values.length),
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          callbacks: { label: ctx => ` ${fmt(ctx.parsed.x)}` }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { callback: v => fmt(v) }
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 12 } }
        }
      }
    }
  });
}

function buildRankingTable(metric) {
  const tbody = document.getElementById('rankTableBody');
  if (!tbody) return;
  const sorted = [...RANKING_DENTRO].sort((a, b) => b[metric] - a[metric]);
  const totalItens = RANKING_DENTRO.reduce((s, d) => s + d.itens, 0);

  const medals = ['🥇', '🥈', '🥉'];
  tbody.innerHTML = sorted.map((row, i) => {
    const pct = totalItens > 0 ? (row.itens / totalItens * 100) : 0;
    return `
      <tr>
        <td class="rank-num">${medals[i] || (i + 1)}</td>
        <td><strong>${row.nome}</strong><br><small style="color:#bbb">ID: ${row.id}</small></td>
        <td>${fmt(row.itens)}</td>
        <td>${fmt(row.clientes)}</td>
        <td>${fmt(row.cupons)}</td>
        <td>
          <div class="share-bar-wrap">
            <div class="share-bar-bg">
              <div class="share-bar-fill" style="width:${Math.min(pct * 3.5, 100)}%"></div>
            </div>
            <span class="share-pct">${fmtPct(pct, 1)}</span>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function buildBestDayGrid() {
  const grid = document.getElementById('bestDayGrid');
  if (!grid) return;
  const medals = ['🥇', '🥈'];
  grid.innerHTML = BEST_PRODUCT_BY_DAY.map((d, i) => `
    <div class="best-day-card">
      <span class="bd-date">${d.data}</span>
      <span class="bd-medal">${medals[i] || '⭐'}</span>
      ${d.img ? `<img src="${d.img}" class="bd-img" alt="${d.produto}" onerror="this.style.display='none'" />` : ''}
      <span class="bd-name">${d.produto}</span>
      <span class="bd-qty">${fmt(d.itens)} itens</span>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  PRODUTOS CAMPANHA
// ═══════════════════════════════════════════════════════════════
function renderProdutosCampanha() {
  buildProductsGrid(PRODUTOS_CAMPANHA);
  buildProdTable(PRODUTOS_CAMPANHA);

  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      const filtered = PRODUTOS_CAMPANHA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        String(p.id).includes(q)
      );
      buildProductsGrid(filtered);
      buildProdTable(filtered);
    });
  }
}

function buildProductsGrid(data) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = data.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;product-img-placeholder&quot;>🍫</div>'" />`
          : `<div class="product-img-placeholder">🍫</div>`
        }
      </div>
      <span class="pc-id">ID: ${p.id}</span>
      <span class="pc-name">${p.name}</span>
      <div class="pc-prices">
        <span class="pc-original">R$ ${fmtR(p.priceOriginal)}</span>
        <span class="pc-offer">R$ ${fmtR(p.priceOffer)}</span>
        <span class="pc-discount">-${p.discount}%</span>
      </div>
      <span class="pc-status ${p.soldDentro ? 'active' : 'inactive'}">
        ${p.soldDentro ? '✓ Com vendas' : 'Sem vendas ainda'}
      </span>
    </div>
  `).join('');
}

function buildProdTable(data) {
  const tbody = document.getElementById('prodTableBody');
  if (!tbody) return;
  tbody.innerHTML = data.map((p, i) => `
    <tr>
      <td><code style="font-size:0.78rem;color:var(--choco-light)">${p.id}</code></td>
      <td><strong>${p.name}</strong></td>
      <td>R$ ${fmtR(p.priceOriginal)}</td>
      <td style="color:var(--mint);font-weight:700">R$ ${fmtR(p.priceOffer)}</td>
      <td>
        <span style="background:var(--pink-light);color:var(--pink);padding:2px 8px;border-radius:10px;font-weight:700;font-size:0.78rem">
          -${p.discount}%
        </span>
      </td>
      <td>
        <span class="${p.soldDentro ? 'badge-within' : 'badge-outside'}">
          ${p.soldDentro ? '✓ Vendas registradas' : 'Sem vendas (campanha)'}
        </span>
      </td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  OPERACIONAL CRM
// ═══════════════════════════════════════════════════════════════
function renderCRM() {
  // Gráfico linha: clientes por dia (geral, todos)
  destroyChart('chartCRMDiario');
  const ctxCRM = document.getElementById('chartCRMDiario');
  if (ctxCRM) {
    const labels = EVOLUCAO_DIARIA_GERAL.map(d => d.data);
    chartInstances['chartCRMDiario'] = new Chart(ctxCRM, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Clientes Únicos/Dia',
            data: EVOLUCAO_DIARIA_GERAL.map(d => d.clientes),
            borderColor: PALETA.lilac,
            backgroundColor: PALETA.lilacBg,
            borderWidth: 3,
            pointRadius: 5,
            pointBackgroundColor: PALETA.lilac,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.35,
            fill: true
          },
          {
            label: 'Cupons/Dia',
            data: EVOLUCAO_DIARIA_GERAL.map(d => d.cupons),
            borderColor: PALETA.caramel,
            backgroundColor: PALETA.caramelBg,
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: PALETA.caramel,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            tension: 0.35,
            fill: false,
            borderDash: [5, 4]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, padding: 14, font: { size: 12 } } },
          tooltip: {
            backgroundColor: 'rgba(61,26,0,0.9)',
            titleColor: '#fff',
            bodyColor: '#f5ead8',
            padding: 10,
            cornerRadius: 10,
            callbacks: {
              label: ctx => ` ${fmt(ctx.parsed.y)}`,
              afterBody: (items) => {
                const date = items[0]?.label;
                if (date === '12/03' || date === '13/03' || date === '14/03') {
                  return ['📌 Campanha ativa'];
                }
                return [];
              }
            }
          },
          annotation: {}
        },
        scales: {
          x: { grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false }, ticks: { font: { size: 11, weight: '600' } } },
          y: {
            grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
            beginAtZero: true,
            grace: '8%',
            ticks: { font: { size: 11 }, callback: v => fmt(v) }
          }
        }
      }
    });
  }

  // Funil
  destroyChart('chartCRMFunil');
  const ctxFunil = document.getElementById('chartCRMFunil');
  if (ctxFunil) {
    chartInstances['chartCRMFunil'] = new Chart(ctxFunil, {
      type: 'bar',
      data: {
        labels: ['Base Total', 'Compraram', 'Na Campanha'],
        datasets: [{
          label: 'Clientes',
          data: [TOTAIS.clientesTotal, TOTAIS.clientesFora + TOTAIS.clientesDentro, TOTAIS.clientesDentro],
          backgroundColor: [PALETA.lilacBg, PALETA.caramelBg, PALETA.lilac],
          borderColor: [PALETA.lilac, PALETA.caramel, PALETA.lilac],
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(61,26,0,0.9)',
            callbacks: { label: ctx => ` ${fmt(ctx.parsed.y)} clientes` }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { color: 'rgba(0,0,0,0.04)' },
            ticks: { callback: v => (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v) }
          }
        }
      }
    });
  }

  // Tabela de clientes por dia
  buildCRMDayTable();

  // Insights
  buildCRMInsights();
}

function buildCRMDayTable() {
  const tbody = document.getElementById('crmDayTableBody');
  if (!tbody) return;

  const dentroPorDia = { '12/03': 0, '13/03': 1189, '14/03': 1859 };

  tbody.innerHTML = EVOLUCAO_DIARIA_GERAL.map(d => {
    const dentro = dentroPorDia[d.data] || 0;
    const pct = d.clientes > 0 ? (dentro / d.clientes * 100) : 0;
    const isActive = dentro > 0;
    return `
      <tr style="${isActive ? 'background:#fdf6ec;' : ''}">
        <td style="font-weight:${isActive ? '700' : '400'}">
          ${d.data}${isActive ? ' 📌' : ''}
        </td>
        <td>${fmt(d.clientes)}</td>
        <td style="color:${isActive ? 'var(--lilac)' : '#ccc'};font-weight:${isActive ? '700' : '400'}">
          ${fmt(dentro)}
        </td>
        <td>${fmt(d.clientes + dentro)}</td>
        <td>
          ${isActive
            ? `<span style="background:var(--lilac);color:#fff;padding:2px 8px;border-radius:10px;font-size:0.76rem;font-weight:700">${fmtPct(pct, 1)}</span>`
            : '<span style="color:#ccc;font-size:0.76rem">—</span>'
          }
        </td>
      </tr>
    `;
  }).join('');
}

function buildCRMInsights() {
  const container = document.getElementById('crmInsights');
  if (!container) return;

  const insights = [
    {
      icon: 'fas fa-arrow-trend-up',
      type: 'good',
      title: 'Crescimento acelerado',
      text: 'De 1.189 clientes (dia 13) para 1.859 clientes (dia 14), um crescimento de +56% em 24h na campanha.'
    },
    {
      icon: 'fas fa-users-slash',
      type: 'alert',
      title: 'Grande gap de cobertura',
      text: 'A campanha atingiu 10,00% da base. Ainda há potencial de 27.432 clientes fora da campanha.'
    },
    {
      icon: 'fas fa-store',
      type: 'info',
      title: '51 lojas com vendas na campanha',
      text: 'A loja Maringá Av Kakogawa lidera em quantidade vendida, seguida por São José Rua Joinville e Pinheirinho.'
    },
    {
      icon: 'fas fa-link',
      type: 'warn',
      title: 'Overlap: 0 clientes',
      text: 'Não houve sobreposição identificada entre clientes Dentro e Fora nesta extração de dados.'
    },
    {
      icon: 'fas fa-egg',
      type: 'good',
      title: '13 de 19 produtos com vendas',
      text: 'Dos 19 produtos mapeados na campanha, 13 já registraram vendas. Restam 6 produtos sem adesão.'
    },
    {
      icon: 'fas fa-calendar-check',
      type: 'info',
      title: 'Campanha iniciada em 12/03',
      text: 'Dados de venda na campanha disponíveis para 13 e 14/03. Tendência positiva de crescimento diário.'
    }
  ];

  container.innerHTML = insights.map(ins => `
    <div class="insight-card">
      <div class="insight-icon ${ins.type}"><i class="${ins.icon}"></i></div>
      <div class="insight-text">
        <strong>${ins.title}</strong>
        <p>${ins.text}</p>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  // Render initial section
  renderVisaoGeral();
  animateCounters();
});
