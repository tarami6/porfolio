import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import TabsComponent from './tabs/tabComponent/TabsComponent'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '80%',
    fontFamily: 'roboto',
    position: 'relative',
    padding: '10px 15px',
  },
  year: {
    color: '#eb3da1',
    fontSize: '2vh',
  },
  underline: {
    display: 'flex',
    width: '0vw',
    height: '1vw',
    justifyContent: 'space-between',
    position: 'relative',
    margin: '6px',
    backgroundColor: '#eb3da1',
    zIndex: '99',
  },
  line: {
    width: '4vw',
    height: '1vw',
    backgroundColor: '#4c23ea',
  },
}))

const SecondScreen = () => {
  const classes = useStyle()
  const [on, toogle] = useState(false)

  const size = useSpring({
    width: on ? '17vw' : '0vw',
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

      <Grid
        container
        direction='column'
        alignItems='center'
        wrap='nowrap'
        style={{ zIndex: '10' }}
      >
        <h3 className={classes.year}>2019-2020</h3>
        <animated.div className={classes.underline} style={size}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </animated.div>
        <Typography variant='h6' style={{ color: '#666', fontSize: '2vh' }}>
          Dooble
        </Typography>

        <Box
          component='span'
          m={0}
          style={{ zIndex: '10', color: '#212121', fontSize: '2vh' }}
        >
          <h3>Under confidality contract</h3>
        </Box>
        <Grid container item xs={11} style={{ zIndex: '10', marginTop: '1em' }}>
          <TabsComponent />
        </Grid>
      </Grid>
    </div>
  )
}

export default SecondScreen
