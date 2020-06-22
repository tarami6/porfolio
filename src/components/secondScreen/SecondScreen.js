import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import bg1 from "../../assets/images/bg-1.png";
import bg2 from "../../assets/images/bg-2.png";
import vector from "../../assets/images/vector.png";
import lock from "../../assets/images/lock.png";
import { Grid, Box, Typography } from "@material-ui/core";
import roboto from "fontsource-roboto";
import TabsComponent from "./tabs/tabComponent/TabsComponent";

const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    fontFamily: "roboto",
    position: "relative",
    paddingTop: "50px",
    backgroundColor: "#fefefe",
    overflow: "hidden",
  },
  bgLeft: {
    width: "450px",
    position: "absolute",
    left: "-10%",
  },
  bgRight: {
    width: "450px",
    position: "absolute",
    right: "-0%",
    bottom: "-5px",
  },
  lock: {
    width: "240px",
    position: "absolute",
    top: "23%",
    left: "2%",
  },
  vector: {
    width: "420px",
    position: "absolute",
    right: "0%",
    bottom: "0%",
  },
  year: {
    color: "#eb3da1",
  },
  underline: {
    display: "flex",
    width: "120px",
    height: "3px",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#eb3da1",
    margin: "6px",
  },
  line: {
    width: "20px",
    height: "3px",
    backgroundColor: "#4c23ea",
  },
}));
const SecondScreen = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <img src={bg1} alt="bg1" className={classes.bgLeft} />
      <img src={lock} alt="lock" className={classes.lock} />
      <img src={bg2} alt="bg2" className={classes.bgRight} />
      <img src={vector} alt="vector" className={classes.vector} />

      <Grid
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        style={{ zIndex: "10" }}
      >
        <h1 className={classes.year}>2019-2020</h1>
        <div className={classes.underline}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <Typography variant="h6" style={{ color: "#666" }}>
          Dooble
        </Typography>

        <Box component="span" m={2}>
          <h1>Under confidality contract</h1>
        </Box>
        <Grid container item xs={12} sm={8} style={{ zIndex: "10" }}>
          <TabsComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default SecondScreen;
