import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const styles = ({ spacing }: Theme) =>
  createStyles({
    pickerRoot: {
      position: 'relative',
      overflow: 'hidden',
    },
    calendars: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    controls: {
      top: spacing(3),
    },
    chevron: {
      width: spacing(4),
      height: spacing(4),
    },
    weekdays: {
      top: spacing(8),
    },
    fixedElement: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      position: 'absolute',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })

export default makeStyles(styles)
