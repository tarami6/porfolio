import { makeStyles } from '@material-ui/core/styles'

const Style = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    lineHeight: '1.6',
    fontFamily: 'roboto',
  },
  left: {
    width: '20%',
    height: 'auto',
    position: 'absolute',
    left: '0',
    top: '40%',
  },
  right: {
    width: '7%',
    height: 'auto',
    position: 'absolute',
    right: '0',
    top: '40%',
  },
  fix4u: {
    width: '60%',
    position: 'absolute',
    left: '24%',
    top: '40%',
  },
  container: {
    display: 'block',
    width: '100%',
    height: '80vh',
    padding: '4vw',
    position: 'relative',
    marginTop: '50px',
    zIndex: '1',
  },
  story: {
    width: '100%',
    height: '70%',
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '5vh',
  },
  inlineContent: {
    display: 'block',
  },
}))

export default Style