import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Waypoint } from 'react-waypoint'

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
    top: '2%',
    left: '-20px',
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
    height: '80vh',
    padding: '10px 1em',
    marginTop: '50px',
    position: 'absolute',
    top: 0,
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    height: '15%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1vh',
  },
  stepper: {
    display: 'block',
    height: '85%',
  },
}))
const SeconMobile = () => {
  const classes = useStyle()
  const [on, toogle] = useState(false)

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
        <img src={one} alt='left' className={classes.one} />
        <img src={two} alt='right' className={classes.two} />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h6' style={{ color: '#666', fontSize: '5vw' }}>
            E-Commerce
          </Typography>
          <Box
            component='span'
            style={{ zIndex: '10', color: '#212121', fontSize: '5vw' }}
          >
            <h3>Side Entrepreneurship</h3>
          </Box>
        </div>
        <div className={classes.stepper}>
          <StepperContent on={on} />
        </div>
      </div>
    </div>
  )
}

export default SeconMobile
