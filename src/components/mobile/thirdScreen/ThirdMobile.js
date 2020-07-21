import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import StepperContent from './stepper/StepperContent'
import one from '../../../assets/images/Bitmap.png'
import two from '../../../assets/images/leftcorner.png'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    fontFamily: 'roboto',
    overflow: 'hidden',
    position: 'relative',
    paddingTop: '20px',
  },
  one: {
    width: '25%',
    position: 'absolute',
    top: 0,
    lef: 0,
    zIndex: '1',
  },
  two: {
    width: '10%',
    position: 'absolute',
    top: '30%',
    right: '0',
    zIndex: '1',
  },
  content: {
    height: '100vh',
    padding: '10px 2em',
    marginTop: '50px',
    backgroundColor: '#f1f1f1',
    position: 'absolute',
    top: 0,
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
  },
}))
const ThirdMobile = () => {
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
          <Typography variant='h6' style={{ color: '#666', fontSize: '2vh' }}>
            E-Commerce
          </Typography>
          <Box
            component='span'
            style={{ zIndex: '10', color: '#212121', fontSize: '2vh' }}
          >
            <h3>Side Entrepreneurship</h3>
          </Box>
        </div>
        <StepperContent on={on} />
      </div>
    </div>
  )
}

export default ThirdMobile
