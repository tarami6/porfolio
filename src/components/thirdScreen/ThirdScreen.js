import "fontsource-roboto";

import { Box, Typography } from "@material-ui/core";

import React from "react";
import StepperContent from "./stepper/StepperContent";
import { makeStyles } from "@material-ui/core/styles";
import one from "../../assets/images/rightconner.png";
import two from "../../assets/images/leftcorner.png";

const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
    height: "650px",
    backgroundColor: "#f1f1f1",
    position: "relative",
    fontFamily: "roboto",
  },
  one: {
    width: "15%",
    position: "absolute",
    top: "0",
    lef: "0",
  },
  two: {
    width: "4%",
    position: "absolute",
    bottom: "10%",
    right: "0",
  },
  content: {
    padding: "4em 3em",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const ThirdScreen = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className="background">
        <img src={one} alt="right" className={classes.one} />
        <img src={two} alt="left" className={classes.two} />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant="h6" style={{ color: "#666" }}>
            E-Commerce
          </Typography>
          <Box component="span" style={{ color: "#212121" }}>
            <h1>Side Entrepreneurship</h1>
          </Box>
        </div>
        <StepperContent />
      </div>
    </div>
  );
};

export default ThirdScreen;
