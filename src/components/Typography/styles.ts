import createStyles from '@material-ui/core/styles/createStyles'
import { Theme } from '@material-ui/core/styles'

const useStyles = ({ palette, breakpoints }: Theme) =>
  createStyles({
    header: {
      color: palette.trunkrs.primary.indigo.base,

      [breakpoints.down('sm')]: {
        '&:not($mobileFull)': {
          fontSize: 14,
        },
      },
    },
    headerRegular: {
      color: palette.trunkrs.primary.indigo.base,

      [breakpoints.down('sm')]: {
        '&:not($mobileFull)': {
          fontSize: 10,
        },
      },
    },
    textBold: {
      color: palette.trunkrs.primary.indigo.base,

      [breakpoints.down('sm')]: {
        '&:not($mobileFull)': {
          fontSize: 10,
        },
      },
    },
    text: {
      color: palette.trunkrs.primary.indigo.base,

      [breakpoints.down('sm')]: {
        '&:not($mobileFull)': {
          fontSize: 10,
        },
      },
    },
    placeholder: {
      color: palette.trunkrs.grayscale.lighter,
    },
    link: {
      color: palette.trunkrs.primary.indigo.base,

      [breakpoints.down('sm')]: {
        '&:not($mobileFull)': {
          fontSize: 10,
        },
      },
    },
    phoneNumber: {
      color: palette.trunkrs.primary.green.base,
    },
    tableHeader: {
      color: palette.trunkrs.grayscale.darker,
    },
    badge: {
      color: palette.trunkrs.grayscale.darker,
    },
    inputLabel: {
      color: palette.trunkrs.grayscale.darker,
    },
    button: {
      color: 'inherit',
      backgroundColor: 'inherit',
    },
    packageText: {
      color: 'inherit',
      backgroundColor: 'inherit',
    },

    default: {},

    indigo: {
      color: palette.trunkrs.primary.indigo.base,
    },
    green: {
      color: palette.trunkrs.primary.green.base,
    },
    action: {
      color: palette.trunkrs.intent.blue.base,
    },
    danger: {
      color: palette.trunkrs.intent.red.base,
    },
    warning: {
      color: palette.trunkrs.intent.orange.base,
    },
    grey: {
      color: palette.trunkrs.grayscale.darker,
    },
    lightGrey: {
      color: palette.trunkrs.grayscale.lighter,
    },
    theBeast: {
      color: palette.trunkrs.grayscale.theBeast,
    },
    white: {
      color: palette.common.white,
    },

    mobileFull: {},

    none: {
      textTransform: 'initial',
    },

    capitalize: {
      textTransform: 'capitalize',
    },

    uppercase: {
      textTransform: 'uppercase',
    },

    lowercase: {
      textTransform: 'lowercase',
    },
  })

export default useStyles
