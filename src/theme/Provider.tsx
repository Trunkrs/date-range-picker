import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Global from './Global'
import theme from '.'

export interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Global />

    {children}
  </MuiThemeProvider>
)

export default ThemeProvider
