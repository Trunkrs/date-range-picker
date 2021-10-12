import { PaletteOptions } from '@material-ui/core/styles/createPalette'

interface ColorGroup {
  lightest: string
  lighter: string
  base: string
  darker: string
  darkest: string
  fade: string
  darkFade: string
}

interface GradientPosition {
  color: string
  position: string
}

interface TrunkrsColors {
  primary: {
    indigo: ColorGroup
    green: ColorGroup
  }
  secondary: {
    violet: ColorGroup
    lightViolet: ColorGroup
  }
  intent: {
    blue: ColorGroup
    yellow: ColorGroup
    orange: ColorGroup
    red: ColorGroup
  }
  grayscale: {
    purgatory: string
    lighter: string
    base: string
    darker: string
    theBeast: string
  }
  scrim: string
  background: string
  gradients: {
    green: GradientPosition[]
    violet: GradientPosition[]
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    trunkrs: TrunkrsColors
  }

  interface PaletteOptions {
    trunkrs?: TrunkrsColors
  }
}

const trunkrs: TrunkrsColors = {
  primary: {
    indigo: {
      lightest: '#361376',
      lighter: '#2C1060',
      base: '#220C4A',
      darker: '#180834',
      darkest: '#0E051E',
      fade: '#C8C2D2',
      darkFade: '#090312',
    },
    green: {
      lightest: '#59E899',
      lighter: '#42E58C',
      base: '#2CE27E',
      darker: '#1ED771',
      darkest: '#1AC165',
      fade: '#CAF8DF',
      darkFade: '#0B3820',
    },
  },
  secondary: {
    violet: {
      lightest: '#9933FF',
      lighter: '#8D1AFF',
      base: '#8000FF',
      darker: '#7300E6',
      darkest: '#6600CC',
      fade: '#DFBFFF',
      darkFade: '#200040',
    },
    lightViolet: {
      lightest: '#AE97FF',
      lighter: '#9A7DFF',
      base: '#8664FF',
      darker: '#724AFF',
      darkest: '#5E31FF',
      fade: '#E1D8FF',
      darkFade: '#211940',
    },
  },
  intent: {
    blue: {
      lightest: '#45DCFD',
      lighter: '#2CD7FC',
      base: '#13D2FC',
      darker: '#03C7F2',
      darkest: '#03B3D9',
      fade: '#C4F4FE',
      darkFade: '#05343F',
    },
    orange: {
      lightest: '#FFB291',
      lighter: '#FFA177',
      base: '#FF8F5E',
      darker: '#FF7D44',
      darkest: '#FF6C2B',
      fade: '#FFE3D7',
      darkFade: '#402418',
    },
    yellow: {
      lightest: '#FFEFC0',
      lighter: '#FFE38D',
      base: '#FFD65A',
      darker: '#FFD040',
      darkest: '#FFC927',
      fade: '#FFF5D6',
      darkFade: '#403516',
    },
    red: {
      lightest: '#FF8584',
      lighter: '#FF6C6A',
      base: '#FF5351',
      darker: '#FF3A37',
      darkest: '#FF211E',
      fade: '#FFD4D3',
      darkFade: '#401514',
    },
  },
  grayscale: {
    purgatory: '#F5F5F5',
    lighter: '#E0E0E0',
    base: '#CCCCCC',
    darker: '#B8B8B8',
    theBeast: '#666666',
  },
  gradients: {
    green: [
      { color: '#220C4A', position: '0%' },
      { color: '#2CE27E', position: '66%' },
      { color: '#CAF8DF', position: '100%' },
    ],
    violet: [
      { color: '#220C4A', position: '0%' },
      { color: '#8000FF', position: '66%' },
      { color: '#8664FF', position: '100%' },
    ],
  },
  scrim: 'rgba(14, 5, 30, 0.6)',
  background: '#F4F7FC',
}

const colors: PaletteOptions = {
  type: 'light',

  primary: {
    light: trunkrs.primary.indigo.lighter,
    main: trunkrs.primary.indigo.base,
    dark: trunkrs.primary.indigo.darker,
  },

  secondary: {
    light: trunkrs.primary.green.lighter,
    main: trunkrs.primary.green.base,
    dark: trunkrs.primary.green.darker,
  },

  success: {
    light: trunkrs.primary.green.lighter,
    main: trunkrs.primary.green.base,
    dark: trunkrs.primary.green.darker,
  },

  error: {
    light: trunkrs.intent.red.lighter,
    main: trunkrs.intent.red.base,
    dark: trunkrs.intent.red.darker,
  },

  warning: {
    light: trunkrs.intent.orange.lighter,
    main: trunkrs.intent.orange.base,
    dark: trunkrs.intent.orange.darker,
  },

  info: {
    light: trunkrs.intent.blue.lighter,
    main: trunkrs.intent.blue.base,
    dark: trunkrs.intent.blue.darker,
  },

  background: {
    default: trunkrs.background,
  },

  text: {
    primary: trunkrs.primary.indigo.base,
    secondary: trunkrs.grayscale.darker,
    disabled: trunkrs.grayscale.purgatory,
    hint: trunkrs.intent.blue.base,
  },

  trunkrs,
}

export default colors
