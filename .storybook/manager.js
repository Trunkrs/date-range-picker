import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

import theme from '../src/theme'

const trunkrsTheme = create({
  base: 'light',

  fontBase: 'ClanPro-News, sans-serif',

  appBg: theme.palette.trunkrs.background,
  appBorderRadius: theme.shape.borderRadius,

  colorSecondary: theme.palette.trunkrs.primary.green.base,

  textColor: theme.palette.trunkrs.primary.indigo.base,

  brandTitle: 'Trunkrs DateRangePicker Storybook',
  brandImage: '/trunkrs.png',
})

addons.setConfig({
  theme: trunkrsTheme,
})
