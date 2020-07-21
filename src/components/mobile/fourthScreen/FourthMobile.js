import React from "react";
import "fontsource-roboto";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import left from "../../../assets/images/screen4-1.png";
import right from "../../../assets/images/screen4-2.png";
import fix4u from "../../../assets/images/fix4u.png";
import { Button } from "@material-ui/core";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Story from "./story";

const AnButton = withStyles({
  root: {
    borderRadius: "50px",
  },
})(Button);
const useStyle = makeStyles(() => ({
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

const FourthMobile = () => {
  const classes = useStyle()
  const [on, toogle] = React.useState(false)
  const bgColor = on ? 'rgba(0,0,0,0.1)' : 'none'
  return (
    <div className={classes.root}>
      <div className={classes.container} style={{ background: `${bgColor}` }}>
        {on && <Story />}
        <div className={classes.title}>
          <span style={{ color: '#666' }}>The subject chine</span>
          <h1>Chinise Startup</h1>
          <AnButton
            variant='contained'
            color='primary'
            disableElevation
            onClick={() => toogle(!on)}
          >
            Read the story {on && <KeyboardArrowDown />}
          </AnButton>
        </div>
      </div>
      <img src={fix4u} alt='right' className={classes.fix4u} />
      <img src={left} alt='left' className={classes.left} />
      <img src={right} alt='right' className={classes.right} />
    </div>
  )
}

export default FourthMobile
