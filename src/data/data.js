/* eslint-disable global-require */
const providersPrev = [
  {
    providerName: 'Pernod',
    providerImage: require('../productImages/pernod10.png'),
    products: [
      require('../productImages/products/pernod/absolut 1 Li.png'),
      require('../productImages/products/pernod/chivas regal 12.png'),
      require('../productImages/products/pernod/domencq.png'),
      require('../productImages/products/pernod/gin beefeater.png'),
      require('../productImages/products/pernod/gin orloff 1 LI.png'),
      require('../productImages/products/pernod/montila carta crist.png'),
      require('../productImages/products/pernod/passport 1l.png'),
      require('../productImages/products/pernod/vodka orloff 1 li  5xdestilada.png'),
    ],
  },
  {
    providerName: 'Mondelez',
    providerImage: require('../productImages/mondelez.png'),
    products: [
      require('../productImages/products/Mondelez/BBbisLaka.png'),
      require('../productImages/products/Mondelez/bbLactaGrandesSucessos.png'),
      require('../productImages/products/Mondelez/poRoyal.png'),
      require('../productImages/products/Mondelez/dropsTangTaranja.png'),
      require('../productImages/products/Mondelez/BBbisAoLeite.png'),
      require('../productImages/products/Mondelez/dropsHallsMenta.png'),
      require('../productImages/products/Mondelez/dropsFreshAbacaxi.png'),
      require('../productImages/products/Mondelez/refClightAbacaxi.png'),
    ],
  },
  {
    providerName: 'Cargil',
    providerImage: require('../productImages/cargil.png'),
    products: [
      require('../productImages/products/cargill/azeite ol borges 500 ml.png'),
      require('../productImages/products/cargill/catchup elefante pet.png'),
      require('../productImages/products/cargill/ext tomate 130 gr.png'),
      require('../productImages/products/cargill/maionese liza.png'),
      require('../productImages/products/cargill/molho pomarola 300 gr sache.png'),
      require('../productImages/products/cargill/molho tarantella 300 gr sache.png'),
      require('../productImages/products/cargill/oleo comp maria  500 ml.png'),
      require('../productImages/products/cargill/oleo soja liza  900ml  pet.png'),
    ],
  },
  {
    providerName: 'Nestle',
    providerImage: require('../productImages/nestle.png'),
    products: [
      require('../productImages/products/Nestle/chokito.png'),
      require('../productImages/products/Nestle/achoc nescau 2.0.png'),
      require('../productImages/products/Nestle/serenata de amor.png'),
      require('../productImages/products/Nestle/pretigio.png'),
      require('../productImages/products/Nestle/leite moca.png'),
      require('../productImages/products/Nestle/leite po ninho.png'),
      require('../productImages/products/Nestle/especialidades.png'),
      require('../productImages/products/Nestle/leite po ninho comp lacteo.png'),
    ],
  },
  {
    providerName: 'Pepsico',
    providerImage: require('../productImages/pepsico.png'),
    products: [
      require('../productImages/products/pepsico/aveia quaker.png'),
      require('../productImages/products/pepsico/kero coco 1 L.png'),
      require('../productImages/products/pepsico/salgadinho churrasco.png'),
      require('../productImages/products/pepsico/toddy 200ml levinho.png'),
      require('../productImages/products/pepsico/toddy 200ml trad.png'),
      require('../productImages/products/pepsico/toddy 380 gr light.png'),
      require('../productImages/products/pepsico/salgadinho pao de alho.png'),
      require('../productImages/products/pepsico/toddy 370 gr.png'),

    ],
  },
  {
    providerName: 'Bombril',
    providerImage: require('../productImages/bombril.png'),
    products: [
      require('../productImages/products/bombril/det liq limpol.png'),
      require('../productImages/products/bombril/la de aco.png'),
      require('../productImages/products/bombril/mon bijou laranja.png'),
      require('../productImages/products/bombril/mon bijou.png'),
      require('../productImages/products/bombril/pinho brill.png'),
      require('../productImages/products/bombril/sapolio radium crem cloro.png'),
      require('../productImages/products/bombril/sapolio radium crem lavanda.png'),
      require('../productImages/products/bombril/sapolio radium po cloro.png'),
    ],
  },
];

const providers = [
  {
    image: require('../images/pernod.png'),
    title: 'Pernod Ricard Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/nestle.png'),
    title: 'Nestle Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/cargill.png'),
    title: 'Cargill Agricola',
    description: 'A short description',
  },
  {
    image: require('../images/mondelez.png'),
    title: 'Mondelez Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/pepsico.png'),
    title: 'Pepsico Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/amparo.png'),
    title: 'Química Amparo',
    description: 'A short description',
  },
  {
    image: require('../images/bombril.png'),
    title: 'Bombril',
    description: 'A short description',
  },
  {
    image: require('../images/bluequimica.png'),
    title: 'Blue Química Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/blue.png'),
    title: 'Blue Alimentosblue',
    description: 'A short description',
  },
  {
    image: require('../images/leao.png'),
    title: 'Leão Alimentos e Bebidas',
    description: 'A short description',
  },
  {
    image: require('../images/caramuru.png'),
    title: 'Caramuru Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/camil.png'),
    title: 'Camil Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/itambe.png'),
    title: 'Itambé Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/comary.png'),
    title: 'Comary Indústria de Bebidas',
    description: 'A short description',
  },
  {
    image: require('../images/ducoco.png'),
    title: 'Ducoco Produtos Alimentícios',
    description: 'A short description',
  },
  {
    image: require('../images/amafil.png'),
    title: 'Amafil Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/mills.png'),
    title: 'General Mills Brasil',
    description: 'A short description',
  },
  // {
  //   image: require('../images/brasileira.png'),
  //   title: 'Empresa Brasileira de Bebidas',
  //   description: 'A short description',
  // },
  {
    image: require('../images/violetera.png'),
    title: 'La Violetera',
    description: 'A short description',
  },
  {
    image: require('../images/ingleza.png'),
    title: 'Ingleza Produtos de limpeza',
    description: 'A short description',
  },
  {
    image: require('../images/aurora.jpg'),
    title: 'Vinícola Aurora',
    description: 'A short description',
  },
  {
    image: require('../images/cvg.png'),
    title: 'Cia. Volta Grande de Papel',
    description: 'A short description',
  },
  {
    image: require('../images/crs.png'),
    title: 'CRS',
    description: 'A short description',
  },
  {
    image: require('../images/bacardi.png'),
    title: 'Bacardi - Martini do Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/zanlorenzi.png'),
    title: 'Zanlorenzi Bebidas',
    description: 'A short description',
  },
  // {
  //   image: require('../images/gramtok.png'),
  //   title: 'Gramtok Distribuição',
  //   description: 'A short description',
  // },
  {
    image: require('../images/angelo.png'),
    title: 'Angelo Auricchio & Cia.',
    description: 'A short description',
  },
  {
    image: require('../images/alumipack.png'),
    title: 'Alumipack',
    description: 'A short description',
  },
  {
    image: require('../images/pirassununga.png'),
    title: 'Pirassununga',
    description: 'A short description',
  },
  {
    image: require('../images/campari.png'),
    title: 'Campari do Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/tangara.png'),
    title: 'Tangara Prod. Químicos',
    description: 'A short description',
  },
  {
    image: require('../images/gdc.png'),
    title: 'GDC Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/platina.png'),
    title: 'Platina Cosméticos',
    description: 'A short description',
  },
  // {
  //   image: require('../images/distribuidora.png'),
  //   title: 'Distribuidora de Produtos',
  //   description: 'A short description',
  // },
  {
    image: require('../images/muller.png'),
    title: 'Companhia Muller de Bebidas',
    description: 'A short description',
  },
  {
    image: require('../images/icoaraci.png'),
    title: 'ICOARACI Indústria de Conservas',
    description: 'A short description',
  },
  {
    image: require('../images/gallo.png'),
    title: 'Gallo Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/docemineiro.png'),
    title: 'Doce Mineiro',
    description: 'A short description',
  },
  {
    image: require('../images/cyvan.jpeg'),
    title: 'Cyvan Produtos Químicos',
    description: 'A short description',
  },
  {
    image: require('../images/globo.png'),
    title: 'Super Globo Química',
    description: 'A short description',
  },
  {
    image: require('../images/spectrum.png'),
    title: 'Spectrum Brands Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/dori.png'),
    title: 'Dori Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/criasim.png'),
    title: 'Cria Sim Higiêne',
    description: 'A short description',
  },
  {
    image: require('../images/gtex.png'),
    title: 'GTEX Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/bettanin.png'),
    title: 'Bettanin',
    description: 'A short description',
  },
  {
    image: require('../images/pandurata.png'),
    title: 'Pandurata Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/sinter.png'),
    title: 'Sinter Futura',
    description: 'A short description',
  },
  {
    image: require('../images/cooperativa.png'),
    title: 'Cooperativa Central Mineira',
    description: 'A short description',
  },
  {
    image: require('../images/generos.png'),
    title: 'Generos Porto de Mar',
    description: 'A short description',
  },
  // {
  //   image: require('../images/arcos.png'),
  //   title: 'Arcos Comércio',
  //   description: 'A short description',
  // },
  {
    image: require('../images/cardoso.png'),
    title: 'Cardoso e Hillo',
    description: 'A short description',
  }, {
    image: require('../images/missiato.png'),
    title: 'Missiato',
    description: 'A short description',
  },
  // {
  //   image: require('../images/copobras.png'),
  //   title: 'CopoBras',
  //   description: 'A short description',
  // },
  {
    image: require('../images/melitta.png'),
    title: 'Melitta Brasil',
    description: 'A short description',
  },
  {
    image: require('../images/fugini.png'),
    title: 'Fugini Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/apti.png'),
    title: 'APTI Alimentos',
    description: 'A short description',
  },
  {
    image: require('../images/belmont.png'),
    title: 'Vinagre Belmont',
    description: 'A short description',
  },
  {
    image: require('../images/chr.png'),
    title: 'CHR Hansen',
    description: 'A short description',
  },
  {
    image: require('../images/sunguider.png'),
    title: 'Sun Guider Inc',
    description: 'A short description',
  },
];

// const categorys = [
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
//   {
//     name: 'laticícios',
//     thumbnail: 'http://www.domilac.com.br/_nuxt/img/e65ff90.png',
//     sourceCatalog: 'teste.pdf',
//   },
// ];

export { providers, providersPrev };
