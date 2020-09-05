import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import "../../../../assets/font-awesome/css/font-awesome.min.css";
import React from "react";
import Logo from "../../../appBar/logo";

const NavBar = () => {
  const [on, toogle] = React.useState(false);
  const background = on
    ? "transparent"
    : "linear-gradient(0deg,#eb3da1,#4c23ea)";

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={on ? 0 : 6}
        style={{ background: `${background}` }}
      >
        <Toolbar>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Logo />
          </Grid>
        </Toolbar>
      </AppBar>
      <Waypoint
        bottomOffset="20%"
        onEnter={() => {
          if (!on) toogle(true);
        }}
        onLeave={() => {
          toogle(false);
        }}
      />
    </div>
  );
};

export default NavBar;
