import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import Logo from "./logo";
import SocialIcons from "./socialIcons";

const NavBar = () => {
  return (
    <div>
      <AppBar position="absolute" color="transparent" elevation={0} >
        <Toolbar>
          <Grid container justify="center" alignItems="center">
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
