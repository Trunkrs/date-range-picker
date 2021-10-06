import withStyles from '@material-ui/core/styles/withStyles'

const Global = withStyles((theme) => ({
  '@global': {
    // Define any global styles/classes here
    body: {
      overflowY: 'auto',
    },

    'body[style*="overflow: hidden;"]': {
      paddingRight: theme.spacing(1),
    },

    '::-webkit-scrollbar': {
      width: theme.spacing(1),
    },

    '::-webkit-scrollbar-track': {
      borderRadius: theme.shape.radius8,
      background: theme.palette.trunkrs.grayscale.purgatory,
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: theme.shape.radius8,
      background: theme.palette.trunkrs.grayscale.base,
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.trunkrs.grayscale.darker,
    },

    '::placeholder': {
      color: theme.palette.trunkrs.grayscale.base,
    },

    // [theme.breakpoints.down('sm')]: {
    //   'input, select, textarea': {
    //     lineHeight: '32px !important',
    //     fontSize: '16px !important',
    //   },
    // },
  },
}))(() => null)

export default Global
