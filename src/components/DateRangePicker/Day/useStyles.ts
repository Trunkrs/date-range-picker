import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles'

const styles = ({ palette }: Theme) =>
  createStyles({
    day: {
      position: 'relative',
      textAlign: 'center',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderTop: '1px solid white',
      borderBottom: '1px solid white',
    },
    hovering: {
      '&:hover, &:focus': {
        border: `4px solid white`,
        backgroundColor: palette.trunkrs.grayscale.purgatory,
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      },
    },
    outsideDay: {
      cursor: 'default',
    },
    selected: {
      backgroundColor: palette.trunkrs.secondary.lightViolet.fade,
    },
    start: {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    },
    end: {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    },
    selectedDay: {
      width: '100%',
      height: '100%',
      backgroundColor: palette.trunkrs.secondary.violet.base,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '50%',
      color: palette.common.white,
      position: 'relative',
      border: `4px solid ${palette.trunkrs.secondary.lightViolet.fade}`,
    },
    hidden: {
      opacity: 0,
    },
  })

export default makeStyles(styles)
