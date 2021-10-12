import { ThemeOptions, createTheme } from '@material-ui/core/styles'

import shadows from './shadows'
import typography from './typography'
import palette from './colors'
import shape from './shape'
import other from './other'

import overrides from './overrides'
import props from './props'

const theme: ThemeOptions = {
  ...other,
  palette,
  typography,
  overrides,
  props,
  shadows,
  shape,
}

export default createTheme(theme)
