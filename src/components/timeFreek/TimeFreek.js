import 'fontsource-roboto'

import { Box, Typography } from '@material-ui/core'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import React from 'react'
import StepperContent from './stepper/StepperComponent'
import { makeStyles } from '@material-ui/core/styles'
import img from '../../assets/images/left-1.png'


const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#f1f1f1',
    position: 'relative',
    fontFamily: 'roboto',
    marginTop: '80px',
  },
  img: {
    width: '5%',
    position: 'absolute',
    top: '8%',
    left: '0',
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
const TimeFreek = () => {
  const classes = useStyle()
  const [on, toogle] = React.useState(false)
  const zoom = useSpring({
    transform: on ? 'scale(1)' : 'scale(1.7)',
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
          src={img}
          alt='right'
          className={classes.img}
          style={zoom}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h6' style={{ color: '#666' }}>
            TimeFreek
          </Typography>
          <Box component='span' style={{ color: '#212121' }}>
            <h2>Mobile App</h2>
          </Box>
        </div>
        <StepperContent on={on} />
      </div>
    </div>
  )
}

export default TimeFreek
