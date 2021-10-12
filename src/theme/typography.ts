import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import colors from './colors'

interface ClanProFonts {
  bold: string
  news: string
  book: string
}

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    clanPro: ClanProFonts
  }

  interface TypographyOptions {
    clanPro?: ClanProFonts
  }
}

const clanPro: ClanProFonts = {
  bold: 'ClanPro-Bold, serif',
  news: 'ClanPro-News, serif',
  book: 'ClanPro-News, serif',
}

const typography: TypographyOptions = {
  fontSize: 12,
  fontFamily: clanPro.news,
  clanPro,

  // Header Big
  h1: {
    fontFamily: clanPro.bold,
    fontSize: 20,
  },

  // Header Regular
  h2: {
    fontFamily: clanPro.bold,
    fontSize: 14,
    textTransform: 'uppercase',
    color: colors.trunkrs?.primary.indigo.base,
  },

  // Text Regular
  // Placeholder Text
  // Link Text
  // Phone Number
  body1: {
    fontFamily: clanPro.news,
    fontSize: 12,
    color: 'inherit',
  },

  // Text Regular - Bold
  // Input Label
  body2: {
    fontFamily: clanPro.bold,
    fontSize: 12,
  },

  // Table Header
  overline: {
    fontFamily: clanPro.bold,
    fontSize: 10,
    textTransform: 'none',
  },

  // Badge Text
  // Package Label Text
  caption: {
    fontFamily: clanPro.news,
    fontSize: 10,
  },

  button: {
    fontSize: 12,
    textTransform: 'none',
  },
}

export default typography
