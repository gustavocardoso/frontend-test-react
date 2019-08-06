const colorsDefs = {
  akaroa: '#d0caa1',
  alabaster: '#fafafa',
  anzak: '#e2be55',
  black: '#444',
  chalky: '#f2dc9c',
  mantis: '#89bf67',
  monza: '#dc0f00',
  pearlBush: '#f2ece4',
  robRoy: '#e7c972',
  shipGrey: '#3f3c4b',
  tundora: '#444',
  vanilla: '#d6c7b3',
  westSide: '#fd8619'
}

const theme = {
  background: {
    footer: colorsDefs.shipGrey,
    header: colorsDefs.shipGrey,
    ingredients: colorsDefs.robRoy,
    ingredientsHeader: colorsDefs.westSide,
    ingredientHover: colorsDefs.chalky,
    listItemHover: colorsDefs.pearlBush,
    listItemSelected: colorsDefs.pearlBush
  },

  border: {
    ingredient: colorsDefs.anzak,
    listItem: colorsDefs.pearlBush,
    listItemSelected: colorsDefs.vanilla,
    listItemSelectedBefore: colorsDefs.mantis
  },

  bullet: {
    ingredient: colorsDefs.monza
  },

  icon: {
    header: colorsDefs.westSide
  },

  text: {
    default: colorsDefs.black,
    listItemHover: colorsDefs.black,
    listItemSelected: colorsDefs.black,
    pageTitle: colorsDefs.alabaster,
    ingredientsHeader: colorsDefs.pearlBush,
    ingredient: colorsDefs.shipGrey,
    ingredientHover: colorsDefs.black,
    footer: colorsDefs.alabaster
  },

  link: {
    footer: colorsDefs.robRoy
  },

  layout: {
    paddingDefault: '1.4rem',
    marginDefault: '1rem'
  },

  mediaQuery: {
    large: 'min-width: 1000px'
  }
}

export default theme
