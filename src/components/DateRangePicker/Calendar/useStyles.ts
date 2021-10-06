import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      backgroundColor: palette.common.white,
      display: 'inline-block',
    },
    calendar: {
      padding: spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
    month: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: spacing(2),
      whiteSpace: 'nowrap',
    },
    spacer: {
      height: spacing(5),
    },
    dateGrid: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: `0px repeat(5, ${spacing(5)}px) 0px`,
      gridTemplateRows: `repeat(6, ${spacing(5)}px) 0px 0px 0px`,
    },
    showWeekends: {
      gridTemplateColumns: `repeat(7, ${spacing(5)}px) !important`,
    },
  })

export default makeStyles(styles)
