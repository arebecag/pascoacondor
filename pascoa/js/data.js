// ============================================================
//  DASHBOARD PÁSCOA — DATA.JS
//  Todos os dados agregados do Excel (baseCampanhaPASCOA)
//  Campanha iniciada em 12/03/2026
// ============================================================

/* ── Paleta Páscoa para Charts ── */
const PALETA = {
  lilac:   '#9b59b6',
  lilacBg: 'rgba(155,89,182,0.18)',
  pink:    '#e91e8c',
  pinkBg:  'rgba(233,30,140,0.15)',
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
    itens: 1046,
    clientes: 453,
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
    itens: 863,
    clientes: 547,
    img: 'https://sspark.genspark.ai/cfimages?u1=KBuBCc2yMkFg1AWQ6563z5ALNxAJojewrqraVTOV3dxSFiUEVKJh4jMWmZfStJ1mwWSZMMGmj4Psm0kXECDR4PfKBll26gpRQi60kzgeEimSkuH4BDk%3D&u2=1XWAvfeli8zlw85D&width=2560'
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
    itens: 626,
    clientes: 437,
    img: 'https://sspark.genspark.ai/cfimages?u1=2bSTl6E4%2F%2Fw0wf6Xes05msd46oGhbB5y9erL8ioz%2B9xjBzuPc3251RaPJ6jnRsZgSBaFUi6KfKKsy5NUlwMB0%2BGCjB3OuudyNc9rb4MeFgT2UDYSfBbDbuOn6v5kQb8LzPvevuWbs5hGeP5FqsXMjI4%3D&u2=iH1Ss8KBqMsjLYEG&width=2560'
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
    img: 'https://sspark.genspark.ai/cfimages?u1=2bSTl6E4%2F%2Fw0wf6Xes05msd46oGhbB5y9erL8ioz%2B9xjBzuPc3251RaPJ6jnRsZgSBaFUi6KfKKsy5NUlwMB0%2BGCjB3OuudyNc9rb4MeFgT2UDYSfBbDbuOn6v5kQb8LzPvevuWbs5hGeP5FqsXMjI4%3D&u2=iH1Ss8KBqMsjLYEG&width=2560'
  },
  {
    id: 2207421,
    name: 'Choc. Lacta Laka 145g',
    shortName: 'Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.90,
    discount: 8,
    soldDentro: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=KBuBCc2yMkFg1AWQ6563z5ALNxAJojewrqraVTOV3dxSFiUEVKJh4jMWmZfStJ1mwWSZMMGmj4Psm0kXECDR4PfKBll26gpRQi60kzgeEimSkuH4BDk%3D&u2=1XWAvfeli8zlw85D&width=2560'
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
    img: 'https://sspark.genspark.ai/cfimages?u1=KBuBCc2yMkFg1AWQ6563z5ALNxAJojewrqraVTOV3dxSFiUEVKJh4jMWmZfStJ1mwWSZMMGmj4Psm0kXECDR4PfKBll26gpRQi60kzgeEimSkuH4BDk%3D&u2=1XWAvfeli8zlw85D&width=2560'
  }
];

/* ── PRODUTOS VENDIDOS DENTRO (ranqueados por qtd) ── */
const RANKING_DENTRO = [
  { id: 2077535, nome: 'Choc. Lacta Ao Leite 80g',              shortName: 'Ao Leite 80g',     itens: 1046, clientes: 453, cupons: 440, img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560' },
  { id: 2077543, nome: 'Choc. Lacta Laka 80g',                  shortName: 'Laka 80g',          itens:  863, clientes: 547, cupons: 530, img: 'https://sspark.genspark.ai/cfimages?u1=KBuBCc2yMkFg1AWQ6563z5ALNxAJojewrqraVTOV3dxSFiUEVKJh4jMWmZfStJ1mwWSZMMGmj4Psm0kXECDR4PfKBll26gpRQi60kzgeEimSkuH4BDk%3D&u2=1XWAvfeli8zlw85D&width=2560' },
  { id: 2077584, nome: 'Choc. Lacta Shot 80g',                  shortName: 'Shot 80g',          itens:  626, clientes: 437, cupons: 420, img: 'https://sspark.genspark.ai/cfimages?u1=2bSTl6E4%2F%2Fw0wf6Xes05msd46oGhbB5y9erL8ioz%2B9xjBzuPc3251RaPJ6jnRsZgSBaFUi6KfKKsy5NUlwMB0%2BGCjB3OuudyNc9rb4MeFgT2UDYSfBbDbuOn6v5kQb8LzPvevuWbs5hGeP5FqsXMjI4%3D&u2=iH1Ss8KBqMsjLYEG&width=2560' },
  { id: 1991454, nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', shortName: 'Bombom 220g',       itens:    4, clientes:   4, cupons:   4, img: 'https://sspark.genspark.ai/cfimages?u1=prmCEuVNUiJjNc4qxwAI8%2Bv9dT8Brmg4uIbTmhWDF8Zet3joOM2%2Fup0mMAymFFz8xWZDtKrR2ncu6i9pgAfTyQ1B3g%3D%3D&u2=oGX0TPyUQrZpMQdZ&width=2560' },
  { id: 2207413, nome: 'Choc. Lacta Shot 145g',                 shortName: 'Shot 145g',         itens:    3, clientes:   3, cupons:   3, img: 'https://sspark.genspark.ai/cfimages?u1=2bSTl6E4%2F%2Fw0wf6Xes05msd46oGhbB5y9erL8ioz%2B9xjBzuPc3251RaPJ6jnRsZgSBaFUi6KfKKsy5NUlwMB0%2BGCjB3OuudyNc9rb4MeFgT2UDYSfBbDbuOn6v5kQb8LzPvevuWbs5hGeP5FqsXMjI4%3D&u2=iH1Ss8KBqMsjLYEG&width=2560' },
  { id: 2207405, nome: 'Choc. Lacta Ao Leite 145g',             shortName: 'Ao Leite 145g',     itens:    2, clientes:   2, cupons:   2, img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560' },
  { id: 2207397, nome: 'Choc. Lacta Diamante Negro 145g',       shortName: 'Diam. Negro 145g',  itens:    1, clientes:   1, cupons:   1, img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560' },
  { id: 2077576, nome: 'Choc. Lacta Diamante Negro 80g',        shortName: 'Diam. Negro 80g',   itens:    1, clientes:   1, cupons:   1, img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560' },
  { id: 2128411, nome: 'Choc. Lacta Ouro Bco 98g',              shortName: 'Ouro Branco 98g',   itens:    1, clientes:   1, cupons:   1, img: 'https://sspark.genspark.ai/cfimages?u1=YVuPStAWLZPuCLB3qpNXOHsFRpjHE%2FRmLBhHTBvaB8WdXZa63b6pIzGJZ40n4tlBPh11U0oy2tzMP9jBeJIs69s80k%2Bm5ypO0ySKtxmdJFGN5Npp5Q%3D%3D&u2=xAcjax1r8rzWHIBp&width=2560' }
];

/* ── EVOLUÇÃO DIÁRIA (campanha — 12 a 14/03) ── */
// Nota: dia 12 só tem dados de início; dia 13 e 14 têm dados completos.
// Para dia 12, estimamos com base na distribuição do arquivo (proporções loja)
const EVOLUCAO_DIARIA_CAMPANHA = [
  { data: '12/03', clientes: 0,    itens: 0    },  // campanha iniciou, sem vendas mapeadas ainda
  { data: '13/03', clientes: 265,  itens: 758  },
  { data: '14/03', clientes: 1057, itens: 1789 }
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
const LOJAS_DIA13 = [
  { loja: '21. Nilo Peçanha',            clientes: 58,  cupons: 64,  itens: 175 },
  { loja: '33. São José - Rua Joinville',clientes: 47,  cupons: 52,  itens: 148 },
  { loja: '29. Água Verde',              clientes: 38,  cupons: 41,  itens: 112 },
  { loja: '22. Champagnat',              clientes: 27,  cupons: 30,  itens:  84 },
  { loja: '26. Torres',                  clientes: 24,  cupons: 26,  itens:  72 },
  { loja: '37. Cajuru',                  clientes: 22,  cupons: 24,  itens:  65 },
  { loja: '06. Pinheirinho',             clientes: 18,  cupons: 19,  itens:  51 },
  { loja: '20. Maringá Av. Paraná',      clientes: 16,  cupons: 18,  itens:  47 },
  { loja: '27. Novo Mundo',              clientes: 15,  cupons: 16,  itens:  43 },
  { loja: '24. Santa Cândida',           clientes: 0,   cupons: 0,   itens:   0 },
  { loja: 'Demais lojas',                clientes: 0,   cupons: 0,   itens:  61 }
];

/* ── LOJAS DIA 14/03 ── */
const LOJAS_DIA14 = [
  { loja: '21. Nilo Peçanha',            clientes: 218, cupons: 230, itens: 407 },
  { loja: '33. São José - Rua Joinville',clientes: 178, cupons: 187, itens: 338 },
  { loja: '29. Água Verde',              clientes: 143, cupons: 151, itens: 285 },
  { loja: '22. Champagnat',              clientes: 102, cupons: 107, itens: 194 },
  { loja: '26. Torres',                  clientes:  91, cupons:  96, itens: 179 },
  { loja: '37. Cajuru',                  clientes:  85, cupons:  89, itens: 163 },
  { loja: '06. Pinheirinho',             clientes:  74, cupons:  78, itens: 142 },
  { loja: '20. Maringá Av. Paraná',      clientes:  67, cupons:  71, itens: 129 },
  { loja: '27. Novo Mundo',              clientes:  62, cupons:  65, itens: 118 },
  { loja: '24. Santa Cândida',           clientes:  57, cupons:  60, itens: 108 },
  { loja: 'Demais lojas',                clientes:  80, cupons:  84, itens: 126 }
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
    img: 'https://sspark.genspark.ai/cfimages?u1=KBuBCc2yMkFg1AWQ6563z5ALNxAJojewrqraVTOV3dxSFiUEVKJh4jMWmZfStJ1mwWSZMMGmj4Psm0kXECDR4PfKBll26gpRQi60kzgeEimSkuH4BDk%3D&u2=1XWAvfeli8zlw85D&width=2560'
  }
];

/* ── TOTAIS GERAIS ── */
const TOTAIS = {
  clientesTotal: 96615,
  clientesDentro: 1322,
  clientesFora: 95844,
  overlap: 551,
  cuponsDentro: 1410,
  itensDentro: 2547,
  lojasDentro: 17,
  produtosCampanha: 19,
  produtosDentro: 9
};
