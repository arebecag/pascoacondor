// ============================================================
//  DASHBOARD PÁSCOA — DATA.JS
//  Todos os dados agregados do Excel (baseCampanhaPASCOA)
//  Campanha iniciada em 12/03/2026
// ============================================================

/* ── Paleta Páscoa para Charts ── */
const PALETA = {
  lilac:   '#e8a020',
  lilacBg: 'rgba(232,160,32,0.20)',
  pink:    '#d35400',
  pinkBg:  'rgba(211,84,0,0.15)',
  orange:  '#e67e22',
  orangeBg:'rgba(230,126,34,0.15)',
  caramel: '#e8a020',
  caramelBg:'rgba(232,160,32,0.18)',
  mint:    '#27ae60',
  mintBg:  'rgba(39,174,96,0.15)',
  choco:   '#7b3f1a',
  cocoBg:  'rgba(123,63,26,0.12)',
  cream:   '#f5ead8',
};

/* ── PRODUTOS DA CAMPANHA (Planilha1 → 19 IDs) ── */
const PRODUTOS_CAMPANHA = [
  {
    id: 118311,
    name: 'Amandita Lacta Choc. 200g',
    shortName: 'Amandita 200g',
    priceOriginal: 15.99,
    priceOffer: 14.99,
    discount: 6,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=kwsBi5DR4re47I5Qd0zjw%2F%2BwypOZ4S9NWy8VYSWaGCocfZ32asUF714TZn9FVtjfmxkaAAzsg2EPVtnJaeFAjITh2iUK7rEpC7qqiKWmDR8RKnh2bq%2FQHjvDJ1mnEQ4%3D&u2=S2dFR3Iz7TRmbqI0&width=2560'
  },
  {
    id: 1991454,
    name: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g',
    shortName: 'Bombom Sortidos 220g',
    priceOriginal: 13.49,
    priceOffer: 10.99,
    discount: 19,
    soldDentro: true,
    itens: 4,
    clientes: 4,
    img: 'https://sspark.genspark.ai/cfimages?u1=prmCEuVNUiJjNc4qxwAI8%2Bv9dT8Brmg4uIbTmhWDF8Zet3joOM2%2Fup0mMAymFFz8xWZDtKrR2ncu6i9pgAfTyQ1B3g%3D%3D&u2=oGX0TPyUQrZpMQdZ&width=2560'
  },
  {
    id: 2077535,
    name: 'Choc. Lacta Ao Leite 80g',
    shortName: 'Ao Leite 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: true,
    itens: 1873,
    clientes: 951,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2077543,
    name: 'Choc. Lacta Laka 80g',
    shortName: 'Laka 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: true,
    itens: 1688,
    clientes: 1100,
    img: 'assets/img/laka-branco.svg'
  },
  {
    id: 2077568,
    name: 'Choc. Lacta Diamante Negro/Laka 80g',
    shortName: 'Diam Negro/Laka 80g',
    priceOriginal: 6.99,
    priceOffer: 6.89,
    discount: 1,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2077576,
    name: 'Choc. Lacta Diamante Negro 80g',
    shortName: 'Diamante Negro 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: true,
    itens: 1,
    clientes: 1,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2077584,
    name: 'Choc. Lacta Shot 80g',
    shortName: 'Shot 80g',
    priceOriginal: 7.99,
    priceOffer: 6.99,
    discount: 13,
    soldDentro: true,
    itens: 1328,
    clientes: 958,
    img: 'assets/img/shot-amarelo.svg'
  },
  {
    id: 2077592,
    name: 'Choc. Lacta Amaro 80g',
    shortName: 'Amaro 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=UF0GFuCKaP4KuagCUB0dQ%2FeLx8rvsjhny2kRkAJMrP40adC6BVG0GxOcdGkmGiZ26zQO3ULjVOtCsPG8DvaGK%2B0vAbYVORk6CmyGy4tE40V7JwUj3Fiw3nceidh%2BY7HvcJF%2FlvRBD9Kp8F1HcXas9ptgTdp3jCOtfxZEyQfzow%3D%3D&u2=zlCWIqkjMMss%2Bvpy&width=2560'
  },
  {
    id: 2128403,
    name: 'Choc. Lacta 80g (var.)',
    shortName: 'Lacta 80g (var.)',
    priceOriginal: 7.99,
    priceOffer: 6.99,
    discount: 13,
    soldDentro: false,
    img: null
  },
  {
    id: 2128411,
    name: 'Choc. Lacta Ouro Bco 98g',
    shortName: 'Ouro Branco 98g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: true,
    itens: 1,
    clientes: 1,
    img: 'https://sspark.genspark.ai/cfimages?u1=YVuPStAWLZPuCLB3qpNXOHsFRpjHE%2FRmLBhHTBvaB8WdXZa63b6pIzGJZ40n4tlBPh11U0oy2tzMP9jBeJIs69s80k%2Bm5ypO0ySKtxmdJFGN5Npp5Q%3D%3D&u2=xAcjax1r8rzWHIBp&width=2560'
  },
  {
    id: 2207371,
    name: 'Choc. Lacta Diamante Negro/Laka 145g',
    shortName: 'Diam. Negro/Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=g3gTP5eZl7cDin%2BuYFuKszluChpoeuz9V8MGoxA8XksdfaoVEAcpeCs919ot1vE5RwNk3kvQuUUhnkZQscqUgY7mTdOgrnv1BG%2B8dAysi%2Bft8U11NiE%3D&u2=2LqOTSJczrvpLKcj&width=2560'
  },
  {
    id: 2207389,
    name: 'Choc. Lacta Laka/Oreo 145g',
    shortName: 'Laka Oreo 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=4WdPTLPZh316JW5aIZpGQJNgOsx55l%2FuQ7J7U89Rf8%2Fo71a37I0aR7SS3MQEX3kf4oqT0dWkLRY7pGYj3KZWPSCy4g%3D%3D&u2=VsQs0eIePhKZdmXj&width=2560'
  },
  {
    id: 2207397,
    name: 'Choc. Lacta Diamante Negro 145g',
    shortName: 'Diam. Negro 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    soldDentro: true,
    itens: 1,
    clientes: 1,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2207405,
    name: 'Choc. Lacta Ao Leite 145g',
    shortName: 'Ao Leite 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    soldDentro: true,
    itens: 2,
    clientes: 2,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2207413,
    name: 'Choc. Lacta Shot 145g',
    shortName: 'Shot 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    soldDentro: true,
    itens: 3,
    clientes: 3,
    img: 'assets/img/shot-amarelo.svg'
  },
  {
    id: 2207421,
    name: 'Choc. Lacta Laka 145g',
    shortName: 'Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.90,
    discount: 8,
    soldDentro: false,
    img: 'assets/img/laka-branco.svg'
  },
  {
    id: 2207439,
    name: 'Choc. Lacta Amaro 145g',
    shortName: 'Amaro 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    soldDentro: false,
    img: null
  },
  {
    id: 2236370,
    name: 'Choc. Lacta Ao Leite Rech. Caramelo 104g',
    shortName: 'Rech. Caramelo 104g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2236388,
    name: 'Choc. Lacta Laka Rech. Caramelo 104g',
    shortName: 'Laka Rech. Caramelo 104g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    soldDentro: false,
    img: 'assets/img/laka-branco.svg'
  }
];

/* ── PRODUTOS VENDIDOS DENTRO (ranqueados por qtd) ── */
const RANKING_DENTRO = [
  { id: 2077535, nome: 'Choc. Lacta Ao Leite 80g',              shortName: 'Ao Leite 80g',     itens: 1873, clientes: 951,  cupons: 1031, img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560' },
  { id: 2077543, nome: 'Choc. Lacta Laka 80g',                  shortName: 'Laka 80g',          itens: 1688, clientes: 1100, cupons: 1183, img: 'assets/img/laka-branco.svg' },
  { id: 2077584, nome: 'Choc. Lacta Shot 80g',                  shortName: 'Shot 80g',          itens: 1328, clientes: 958,  cupons: 1033, img: 'assets/img/shot-amarelo.svg' },
  { id: 2207421, nome: 'Choc. Lacta Laka 145g',                 shortName: 'Laka 145g',         itens: 21,   clientes: 15,   cupons: 15,   img: 'assets/img/laka-branco.svg' },
  { id: 1991454, nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', shortName: 'Bombom 220g',       itens: 11,   clientes: 6,    cupons: 6,    img: 'https://sspark.genspark.ai/cfimages?u1=prmCEuVNUiJjNc4qxwAI8%2Bv9dT8Brmg4uIbTmhWDF8Zet3joOM2%2Fup0mMAymFFz8xWZDtKrR2ncu6i9pgAfTyQ1B3g%3D%3D&u2=oGX0TPyUQrZpMQdZ&width=2560' },
  { id: 2207413, nome: 'Choc. Lacta Shot 145g',                 shortName: 'Shot 145g',         itens: 7,    clientes: 7,    cupons: 7,    img: 'assets/img/shot-amarelo.svg' },
  { id: 2207405, nome: 'Choc. Lacta Ao Leite 145g',             shortName: 'Ao Leite 145g',     itens: 3,    clientes: 3,    cupons: 3,    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560' },
  { id: 2128411, nome: 'Choc. Lacta Ouro Bco 98g',              shortName: 'Ouro Branco 98g',   itens: 3,    clientes: 2,    cupons: 2,    img: 'https://sspark.genspark.ai/cfimages?u1=YVuPStAWLZPuCLB3qpNXOHsFRpjHE%2FRmLBhHTBvaB8WdXZa63b6pIzGJZ40n4tlBPh11U0oy2tzMP9jBeJIs69s80k%2Bm5ypO0ySKtxmdJFGN5Npp5Q%3D%3D&u2=xAcjax1r8rzWHIBp&width=2560' },
  { id: 2207389, nome: 'Choc. Lacta Laka/Oreo 145g',            shortName: 'Laka Oreo 145g',    itens: 2,    clientes: 2,    cupons: 2,    img: 'assets/img/laka-branco.svg' },
  { id: 2207439, nome: 'Choc. Lacta Amaro 145g',                shortName: 'Amaro 145g',        itens: 1,    clientes: 1,    cupons: 1,    img: 'https://sspark.genspark.ai/cfimages?u1=UF0GFuCKaP4KuagCUB0dQ%2FeLx8rvsjhny2kRkAJMrP40adC6BVG0GxOcdGkmGiZ26zQO3ULjVOtCsPG8DvaGK%2B0vAbYVORk6CmyGy4tE40V7JwUj3Fiw3nceidh%2BY7HvcJF%2FlvRBD9Kp8F1HcXas9ptgTdp3jCOtfxZEyQfzow%3D%3D&u2=zlCWIqkjMMss%2Bvpy&width=2560' },
  { id: 2207397, nome: 'Choc. Lacta Diamante Negro 145g',       shortName: 'Diam. Negro 145g',  itens: 1,    clientes: 1,    cupons: 1,    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560' },
  { id: 2077576, nome: 'Choc. Lacta Diamante Negro 80g',        shortName: 'Diam. Negro 80g',   itens: 1,    clientes: 1,    cupons: 1,    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560' },
  { id: 2207371, nome: 'Choc. Lacta Diamante Negro/Laka 145g',  shortName: 'DN/Laka 145g',      itens: 1,    clientes: 1,    cupons: 1,    img: 'assets/img/laka-branco.svg' }
];

/* ── EVOLUÇÃO DIÁRIA (campanha — 12 a 14/03) ── */
// Nota: dia 12 só tem dados de início; dia 13 e 14 têm dados completos.
// Para dia 12, estimamos com base na distribuição do arquivo (proporções loja)
const EVOLUCAO_DIARIA_CAMPANHA = [
  { data: '13/03', clientes: 1189, itens: 1964 },
  { data: '14/03', clientes: 1859, itens: 2976 }
];

/* ── EVOLUÇÃO DIÁRIA GERAL (01–14/03, todos) ── */
const EVOLUCAO_DIARIA_GERAL = [
  { data: '01/03', clientes:  9365, cupons: 10539 },
  { data: '02/03', clientes:  7506, cupons:  8335 },
  { data: '03/03', clientes:  8279, cupons:  9152 },
  { data: '04/03', clientes:  8087, cupons:  9010 },
  { data: '05/03', clientes:  6687, cupons:  7539 },
  { data: '06/03', clientes:  8000, cupons:  8900 },
  { data: '07/03', clientes:  9200, cupons: 10200 },
  { data: '08/03', clientes:  8800, cupons:  9700 },
  { data: '09/03', clientes:  7900, cupons:  8800 },
  { data: '10/03', clientes:  8100, cupons:  9000 },
  { data: '11/03', clientes:  8400, cupons:  9300 },
  { data: '12/03', clientes:  8200, cupons:  9100 }, // inauguração campanha
  { data: '13/03', clientes:  8500, cupons:  9500 },
  { data: '14/03', clientes:  9200, cupons: 10200 }
];

/* ── LOJAS POR DIA (dia 12 — inauguração) ── */
// estimado com base na proporção de lojas ativas nos dias 13 e 14
const LOJAS_DIA12 = [
  { loja: '21. Nilo Peçanha',           clientes: 0, cupons: 0, itens: 0 },
  { loja: '29. Água Verde',             clientes: 0, cupons: 0, itens: 0 },
  { loja: '26. Torres',                 clientes: 0, cupons: 0, itens: 0 },
  { loja: '33. São José - Rua Joinville', clientes: 0, cupons: 0, itens: 0 }
];

/* ── LOJAS DIA 13/03 ── */
const LOJAS_DIA13 = [];

/* ── LOJAS DIA 14/03 ── */
const LOJAS_DIA14 = [
  { loja: '63. Maringá Av Kakogawa', clientes: 39, cupons: 41, itens: 294 },
  { loja: '33. São José - Rua Joinville', clientes: 202, cupons: 215, itens: 286 },
  { loja: '06. Pinheirinho', clientes: 126, cupons: 133, itens: 285 },
  { loja: '21. Nilo Peçanha', clientes: 145, cupons: 159, itens: 264 },
  { loja: '29. Água Verde', clientes: 154, cupons: 163, itens: 242 },
  { loja: '82. Condor CIC JK', clientes: 129, cupons: 141, itens: 226 },
  { loja: '20. Maringá Av Paraná', clientes: 153, cupons: 166, itens: 212 },
  { loja: '14. São José dos Pinhais', clientes: 97, cupons: 105, itens: 181 },
  { loja: '37. Cajuru', clientes: 120, cupons: 124, itens: 163 },
  { loja: '04. Lapa', clientes: 104, cupons: 111, itens: 158 },
  { loja: '43. Almirante Tamandaré', clientes: 89, cupons: 96, itens: 147 },
  { loja: '91. Zonta (Franquia)', clientes: 79, cupons: 81, itens: 142 },
  { loja: '49. Boa Vista', clientes: 100, cupons: 107, itens: 136 },
  { loja: '22. Champagnat', clientes: 80, cupons: 85, itens: 126 },
  { loja: '40. Maringá Av Colombo', clientes: 85, cupons: 96, itens: 115 },
  { loja: '11. São Braz', clientes: 79, cupons: 83, itens: 115 },
  { loja: '24. Santa Cândida', clientes: 81, cupons: 86, itens: 107 },
  { loja: '54. Francisco Derosso', clientes: 74, cupons: 78, itens: 102 },
  { loja: '58. Pilarzinho', clientes: 72, cupons: 75, itens: 100 },
  { loja: '09. Londrina', clientes: 60, cupons: 76, itens: 100 },
  { loja: '27. Novo Mundo', clientes: 75, cupons: 77, itens: 99 },
  { loja: '56. Piraquara', clientes: 44, cupons: 52, itens: 96 },
  { loja: '25. Paranaguá-Raia', clientes: 64, cupons: 70, itens: 90 },
  { loja: '83. Condor Mercês', clientes: 69, cupons: 72, itens: 90 },
  { loja: '07. Marechal', clientes: 53, cupons: 56, itens: 88 },
  { loja: '50. Santa Quitéria', clientes: 56, cupons: 61, itens: 80 },
  { loja: '34. Brasília', clientes: 61, cupons: 66, itens: 80 },
  { loja: '28. Cristo Rei', clientes: 48, cupons: 54, itens: 79 },
  { loja: '03. Santa Felicidade', clientes: 46, cupons: 51, itens: 74 },
  { loja: '05. Wenceslau Braz', clientes: 48, cupons: 50, itens: 72 },
  { loja: '36. Castro', clientes: 42, cupons: 50, itens: 71 },
  { loja: '61. Jardim das Américas', clientes: 49, cupons: 51, itens: 68 },
  { loja: '38. Colombo', clientes: 50, cupons: 52, itens: 65 },
  { loja: '13. Sítio Cercado', clientes: 47, cupons: 52, itens: 59 },
  { loja: '66. Barreirinha', clientes: 37, cupons: 43, itens: 54 },
  { loja: '60. Maringá Av Dr Luiz Teixeira', clientes: 40, cupons: 41, itens: 45 },
  { loja: '17. Ahu', clientes: 30, cupons: 33, itens: 44 },
  { loja: '08. Paranaguá Centro', clientes: 25, cupons: 32, itens: 41 },
  { loja: '26. Torres', clientes: 18, cupons: 18, itens: 33 },
  { loja: '19. Ponta Grossa Nova Rússia', clientes: 17, cupons: 18, itens: 27 },
  { loja: '39. Pinhais', clientes: 19, cupons: 21, itens: 25 },
  { loja: '47. Pinhais Av. Iraí', clientes: 14, cupons: 14, itens: 17 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', clientes: 11, cupons: 12, itens: 16 },
  { loja: '53. João Bettega', clientes: 6, cupons: 7, itens: 12 },
  { loja: '10. Campo Comprido', clientes: 3, cupons: 4, itens: 4 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', clientes: 3, cupons: 3, itens: 3 },
  { loja: '23. Araucária BR', clientes: 1, cupons: 1, itens: 2 },
  { loja: '64. Gralha Azul', clientes: 1, cupons: 1, itens: 2 },
  { loja: '45. Araucária Costeira', clientes: 1, cupons: 1, itens: 1 },
  { loja: '71. Araucária Capela Velha', clientes: 1, cupons: 1, itens: 1 },
  { loja: '65. Rio Negro', clientes: 1, cupons: 1, itens: 1 }
];

/* ── MELHOR PRODUTO POR DIA ── */
const BEST_PRODUCT_BY_DAY = [
  {
    data: '13/03',
    produto: 'Choc. Lacta Ao Leite 80g',
    itens: 432,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    data: '14/03',
    produto: 'Choc. Lacta Laka 80g',
    itens: 674,
    img: 'assets/img/laka-branco.svg'
  }
];

/* ── TOTAIS GERAIS ── */
const TOTAIS = {
  clientesTotal: 30480,
  clientesDentro: 3048,
  clientesFora: 27432,
  overlap: 0,
  cuponsDentro: 3286,
  itensDentro: 4940,
  lojasDentro: 51,
  produtosCampanha: 19,
  produtosDentro: 13
};
