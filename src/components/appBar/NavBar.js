import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { Waypoint } from 'react-waypoint'
import '../../assets/font-awesome/css/font-awesome.min.css'
import Logo from "./logo";
import React from "react";
import SocialIcons from "./socialIcons";

const NavBar = () => {
  const [on, toogle] = React.useState(false)
  const background = on ? 'transparent' : '#5d25e2'

  return (
    <div>
      <AppBar
        position='fixed'
        elevation={on ? 0 : 6}
        style={{ background: `${background}` }}
      >
        <Toolbar>
          <Grid container justify='center' alignItems='center'>
            <Grid
              container
              item
              xs={10}
              sm={10}
              direction='row'
              justify='space-between'
            >
              <Logo />
              <SocialIcons />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!on) toogle(true)
        }}
        onLeave={() => {
          toogle(false)
        }}
      />
    </div>
  )
};

export default NavBar;
