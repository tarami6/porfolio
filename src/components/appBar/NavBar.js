import { AppBar, Grid, Toolbar } from "@material-ui/core";

import Logo from "./logo";
import React from "react";
import SocialIcons from "./socialIcons";

const NavBar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        style={{ background: "#5d25e2" }}
      >
        <Toolbar>
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              item
              xs={10}
              sm={10}
              direction="row"
              justify="space-between"
            >
              <Logo />
              <SocialIcons />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
