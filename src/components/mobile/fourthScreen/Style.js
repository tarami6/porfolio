import { makeStyles } from '@material-ui/core/styles'

const Style = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    lineHeight: "1.6",
    fontFamily: "roboto",
  },
  left: {
    width: "20%",
    height: "auto",
    position: "absolute",
    left: "0",
    top: "40%",
  },
  right: {
    width: "7%",
    height: "auto",
    position: "absolute",
    right: "0",
    top: "40%",
  },
  fix4u: {
    width: "60%",
    position: "absolute",
    left: "24%",
    top: "40%",
  },
  container: {
    display: "block",
    width: "100%",
    height: "100%",
    padding: '5vh',
    position: "relative",
    zIndex: "1",
  },
  title: {
    width: "80vw",
    height: "15%",
    position: "absolute",
    left: "10vw",
    bottom: "10vh",
  },
}));

export default Style
