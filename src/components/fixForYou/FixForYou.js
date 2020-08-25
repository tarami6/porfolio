import React from "react";
import "fontsource-roboto";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import left from "../../assets/images/screen4-1.png";
import right from "../../assets/images/screen4-2.png";
import fix4u from "../../assets/images/fix4u.png";
import { Button } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import Story from "./story";

const AnButton = withStyles({
  root: {
    borderRadius: "50px"
  }
})(Button);

const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    lineHeight: "1.6",
    fontFamily: "roboto"
  },
  left: {
    width: "20%",
    height: "auto",
    position: "absolute",
    left: "0",
    top: "15%"
  },
  right: {
    width: "7%",
    height: "auto",
    position: "absolute",
    right: "0",
    top: "15%"
  },
  fix4u: {
    width: "60%",
    position: "absolute",
    left: "24%",
    top: "12%"
  },
  container: {
    display: "block",
    width: "100%",
    height: "100%",
    padding: "100px 100px 20px 100px",
    position: "relative",
    zIndex: "1"
  },
  story: {
    width: "100%",
    height: "70%"
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    height: "30%",
    flexDirection: "column",
    justifyContent: "center"
  },
  inlineContent: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between"
  },
  closeContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
    cursor: 'pointer'
  }
}));

const FixForYou = () => {
  const classes = useStyle();
  const [on, toogle] = React.useState(false);
  const bgColor = on ? "rgba(0,0,0,0.1)" : "none";

  return (
    <div className={classes.root}>
      <div className={classes.container} style={{ background: `${bgColor}` }}>
        <div className={classes.story}>
          {on && (
            <>
              <div className={classes.closeContainer} onClick={() => toogle(!on)}>
                <Cancel />
              </div>
              <Story onClose={() => toogle(!on)} />
            </>
          )}
        </div>
        <div className={classes.titleContainer}>
          <div className={classes.titleContent}>
            <span style={{ color: "#666" }}>Chinese Startup</span>
            <div className={classes.inlineContent}>
              <h2>Fix4U</h2>
              <AnButton
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => toogle(!on)}
              >
                Read the story {on && <Cancel style={{marginLeft: '5px'}}/>}
              </AnButton>
            </div>
          </div>
        </div>
      </div>
      <img src={fix4u} alt="right" className={classes.fix4u} />
      <img src={left} alt="left" className={classes.left} />
      <img src={right} alt="right" className={classes.right} />
    </div>
  );
};

export default FixForYou;
