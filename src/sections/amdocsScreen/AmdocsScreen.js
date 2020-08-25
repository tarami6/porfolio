import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import TabsComponent from '../../components/tabs/tabComponent'
import amdocsLogo from '../../assets/images/amdocsLogo.png'
import amdocsOptimaLogo from '../../assets/images/amdocsOptimaLogo.png'

import {Amdocs} from "../../assets/data/data"




const useStyle = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    fontFamily: 'roboto',
    position: 'relative',
    padding: '50px 15px 0 15px',
    marginTop: '80px',
    backgroundColor: '#fefefe',
    overflow: 'hidden',
  },
  bgLeft: {
    width: '36%',
    position: 'absolute',
    left: '-10%',
  },
  bgRight: {
    width: '40%',
    position: 'absolute',
    right: '-2%',
    bottom: '-1%',
  },
  lock: {
    width: '18%',
    position: 'absolute',
    top: '21%',
    left: '2%',
  },
  vector: {
    width: '35%',
    position: 'absolute',
    right: '-2%',
    bottom: '0%',
  },
  year: {
    color: '#eb3da1',
  },
  underline: {
    display: 'flex',
    width: '0px',
    height: '3px',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: '#eb3da1',
    margin: '6px',
  },
  line: {
    width: '20px',
    height: '3px',
    backgroundColor: '#4c23ea',
  },
}))

const AmdocsScreen = () => {
  const classes = useStyle()
  const [on, toogle] = useState(false)
  const zoom = useSpring({
    transform: on ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 1500 },
  })

  const size = useSpring({
    width: on ? '120px' : '0px',
    config: { duration: 1500 },
  })

  return (
    <div className={classes.root}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!on) toogle(true)
        }}
        onLeave={() => {
          toogle(false)
        }}
      />
      <animated.img
        src={amdocsLogo}
        alt='lock'
        className={classes.lock}
        style={zoom}
      />
      <animated.img
        src={amdocsOptimaLogo}
        alt='vector'
        className={classes.vector}
        style={zoom}
      />

      <Grid
        container
        direction='column'
        alignItems='center'
        wrap='nowrap'
        style={{ zIndex: '10', height: '420px' }}
      >
        <h1 className={classes.year}>2020 - Current</h1>
        <animated.div className={classes.underline} style={ size }>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </animated.div>
        <Typography variant='h6' style={{ color: '#666' }}>
          <h3>Amdocs</h3>
        </Typography>

        <Box component='span' m={2} style={{ zIndex: '10', color: '#212121' }}>
          <h2>Amdocs Optima</h2>
        </Box>
        <Grid
          container
          item
          xs={12}
          sm={10}
          lg={8}
          style={{ zIndex: '10', marginTop: '1em' }}
        >
          <TabsComponent data={Amdocs}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default AmdocsScreen
