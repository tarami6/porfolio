import 'fontsource-roboto'

import { Paper, Typography } from '@material-ui/core'
import { animated, useSpring } from 'react-spring'
import React from 'react'
import image1 from '../../../assets/images/image-12.png'
import image2 from '../../../assets/images/image-11.png'
import { makeStyles } from '@material-ui/core/styles'

const stepperItem = [
  {
    title: 'Timefreek',
    text: `I built the product for production, for iOS & Android. TimeFreek aims to help families and businesses manage daily tasks, meetings, and events. The solution enables users to share calendars between different groups (e.g. family, friends, colleagues, and classmates) with all events synced with everyone in real time.`,
  },
]
const useStyle = makeStyles((theme) => ({
  root: {},
  content: {
    display: 'grid',
    gridTemplateColumns: '5fr 5fr 2fr',
    alignItems: 'end',
    position: 'relative',
    fontFamily: 'roboto',
  },
  image1: {
    width: '28%',
    position: 'absolute',
    left: '21%',
    top: '-3%',
  },
  image2: {
    width: '62%',
    position: 'relative',
    left: '1%',
  },
  paper: {
    width: '100%',
    height: 'min-content',
    padding: '3% 3% 3% 7%',
    marginBottom: '2%',
    boxSizing: 'border-box',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '17%',
  },
  arrow: {
    margin: theme.spacing(1),
    backgroundColor: '#4c23ea',
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
      <div className={classes.content}>
        <div className={classes.images}>
          <animated.img
            src={image2}
            alt='image2'
            className={classes.image2}
            style={{
              transform: scale
                .interpolate({
                  range: [0, 0.75, 1],
                  output: [0.9, 1.1, 1],
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

        <Paper square elevation={0} className={classes.paper}>
          <Typography variant='h4'>{stepperItem.title}</Typography>
          <Typography>{stepperItem.text}</Typography>
        </Paper>
      </div>
    </div>
  )
}

export default StepperContent
