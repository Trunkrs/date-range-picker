import React, { ElementType } from 'react'
import clsx from 'clsx'

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography'
import { Colors, Component, MobileVariant } from '../../typings'

import { VariantMapper, VariantProps } from './helper'
import styles from './styles'

export interface TypographyProps extends WithStyles<typeof styles> {
  children?: React.ReactNode
  className?: string
  variant?: VariantProps
  mobileVariant?: MobileVariant
  align?: MuiTypographyProps['align']
  color?: Colors
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none'
  component?: Component
}

export const Typography: React.FC<TypographyProps> = ({
  classes,
  transform,
  component,
  variant = 'text',
  mobileVariant = 'small',
  children,
  className,
  align,
  color,
}) => (
  <MuiTypography
    color="inherit"
    component={component as ElementType}
    variant={VariantMapper[variant]}
    align={align}
    className={clsx(
      classes[variant],
      color && classes[color],
      transform && classes[transform],
      mobileVariant === 'full' && classes.mobileFull,
      className,
    )}
  >
    {children}
  </MuiTypography>
)

export default withStyles(styles)(Typography)
