import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import StepperContent from './stepper/StepperContent'
import one from '../../assets/images/rightconner.png'
import two from '../../assets/images/leftcorner.png'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#f1f1f1',
    position: 'relative',
    fontFamily: 'roboto',
    overflow: 'hidden',
    marginTop: '80px',
  },
  one: {
    width: '15%',
    position: 'absolute',
    top: '0',
    lef: '0',
  },
  two: {
    width: '4%',
    position: 'absolute',
    bottom: '10%',
    right: '0',
  },
  content: {
    padding: '4em 3em',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const ZerBayad = () => {
  const classes = useStyle()
  const [on, toogle] = useState(false)
  const zoom = useSpring({
    transform: on ? 'scale(1)' : 'scale(1.4)',
    config: { duration: 1500 },
  })

  return (
    <div className={classes.root}>
      <div className='background'>
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
          src={one}
          alt='right'
          className={classes.one}
          style={zoom}
        />
        <animated.img
          src={two}
          alt='left'
          className={classes.two} 
          style={zoom}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h6' style={{ color: '#666' }}>
            ZerBayad
          </Typography>
          <Box component='span' style={{ color: '#212121' }}>
            <h2>Entrepreneurship</h2>
          </Box>
        </div>
        <StepperContent on={on} />
      </div>
    </div>
  )
}

export default ZerBayad
