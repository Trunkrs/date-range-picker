import React from 'react'
import { addDecorator } from '@storybook/react'
import Box from '@material-ui/core/Box'

import ThemeProvider from '../src/theme/Provider'

addDecorator(Story => (
  <ThemeProvider>
    <Box display="flex" padding={2}>
      <Story />
    </Box>
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}