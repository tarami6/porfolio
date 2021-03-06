import 'fontsource-roboto'

import { Paper, Typography } from '@material-ui/core'
import { animated, useSpring } from 'react-spring'
import React from 'react'
import image1 from '../../../../assets/images/image-12.png'
import image2 from '../../../../assets/images/image-11.png'
import { makeStyles } from '@material-ui/core/styles'

const stepperItem = {
  title: 'Timefreek',
  text: `I built the product for production, for iOS & Android. TimeFreek aims to help families and businesses manage daily tasks, meetings, and events. The solution enables users to share calendars between different groups (e.g. family, friends, colleagues, and classmates) with all events synced with everyone in real time.`,
}

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100%',
    display: 'block',
    position: 'relative',
    fontFamily: 'roboto',
  },
  images: {
    display: 'block',
    height: '45%',
    position: 'relative',
    marginTop: '35px',
  },
  image1: {
    height: '60vw',
    position: 'absolute',
    left: '54%',
    top: 0,
    zIndex: '3',
  },
  image2: {
    height: '50vw',
    position: 'relative',
    left: '4%',
    zIndex: '3',
  },
  peperContent: {
    height: '50%',
    marginTop: '35px',
  },
  paper: {
    width: '100%',
    height: '100%',
    padding: '7%',
    boxSizing: 'border-box',
    background: 'transparent',
    zIndex: '2',
  },
}))

const StepperContent = ({ on }) => {
  const classes = useStyle()

  const { scale } = useSpring({
    scale: on ? '1' : '0',
    config: { duration: 1500 },
  })

  return (
    <div className={classes.root}>
      <div className={classes.images}>
        <animated.img
          src={image2}
          alt='image2'
          className={classes.image2}
          style={{
            transform: scale
              .interpolate({
                range: [0, 0.75, 1],
                output: [0.89, 1.08, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        />
        <animated.img
          src={image1}
          alt='image1'
          className={classes.image1}
          style={{
            transform: scale
              .interpolate({
                range: [0, 0.75, 1],
                output: [1, 0.95, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        />
      </div>
      <div className={classes.peperContent}>
        <Paper square elevation={0} className={classes.paper}>
          <Typography variant='h5'>{stepperItem.title}</Typography>
          <Typography
            style={{
              fontSize: '5vw',
            }}
          >
            {stepperItem.text}
          </Typography>
        </Paper>
      </div>
    </div>
  )
}

export default StepperContent
