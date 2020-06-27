import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import TabsComponent from './tabs/tabComponent/TabsComponent'
import bg1 from '../../assets/images/bg-1.png'
import bg2 from '../../assets/images/bg-2.png'
import lock from '../../assets/images/lock.png'
import { makeStyles } from '@material-ui/core/styles'
import vector from '../../assets/images/vector.png'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '650px',
    fontFamily: 'roboto',
    position: 'relative',
    padding: '50px 15px 0 15px',
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
    width: '20%',
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

const SecondScreen = () => {
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
      <img src={bg1} alt='bg1' className={classes.bgLeft} />
      <animated.img
        src={lock}
        alt='lock'
        className={classes.lock}
        style={zoom}
      />
      <animated.img src={bg2} alt='bg2' className={classes.bgRight} />
      <animated.img
        src={vector}
        alt='vector'
        className={classes.vector}
        style={zoom}
      />

      <Grid
        container
        direction='column'
        alignItems='center'
        wrap='nowrap'
        style={{ zIndex: '10' }}
      >
        <h1 className={classes.year}>2019-2020</h1>
        <animated.div className={classes.underline} style={ size }>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </animated.div>
        <Typography variant='h6' style={{ color: '#666' }}>
          Dooble
        </Typography>

        <Box component='span' m={2} style={{ zIndex: '10', color: '#212121' }}>
          <h1>Under confidality contract</h1>
        </Box>
        <Grid
          container
          item
          xs={12}
          sm={10}
          lg={8}
          style={{ zIndex: '10', marginTop: '1em' }}
        >
          <TabsComponent />
        </Grid>
      </Grid>
    </div>
  )
}

export default SecondScreen
