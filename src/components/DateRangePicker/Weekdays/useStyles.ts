import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    weekdays: {
      display: 'grid',
      gridTemplateColumns: `0px repeat(5, ${spacing(5)}px) 0px`,
    },
    weekdayName: {
      color: palette.trunkrs.grayscale.darker,
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      height: spacing(5),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    showWeekends: {
      gridTemplateColumns: `repeat(7, ${spacing(5)}px) !important`,
    },
  })

export default makeStyles(styles)
