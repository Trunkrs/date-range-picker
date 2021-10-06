// eslint-disable-next-line import/no-unresolved
import { Overrides } from '@material-ui/core/styles/overrides'

import other from '../other'
import shape from '../shape'

const overrides: Overrides = {
  MuiIcon: {
    root: {
      fontSize: 'inherit',
    },
  },
  MuiSvgIcon: {
    root: {
      fontSize: 'inherit',
      verticalAlign: 'middle',
    },
  },
  MuiPaper: {
    root: {
      padding: other.spacing,
    },
  },
  MuiTextField: {
    root: {
      borderRadius: shape.borderRadius,
    },
  },
}
export default overrides
