import 'fontsource-roboto'

import { Fab, Paper, Typography } from '@material-ui/core'

import { animated, useSpring } from 'react-spring'

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import React from 'react'
import image1 from '../../../../assets/images/image-1.png'
import image2 from '../../../../assets/images/image-2.png'
import { makeStyles } from '@material-ui/core/styles'
import { ZerBayad } from '../../../../assets/data/data'

const stepperItem = [
  {
    title: 'The Idia',
    text: ZerBayad.content.idea,
  },
  {
    title: 'Execution ',
    text: ZerBayad.content.execution,
  },
]
const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    fontFamily: 'roboto',
  },
  images: {
    display: 'block',
    height: '43%',
    position: 'relative',
  },
  image1: {
    height: '115%',
    position: 'absolute',
    left: '47%',
    top: 0,
    zIndex: 3,
  },
  image2: {
    height: '95%',
    position: 'relative',
    left: '17%',
    zIndex: 3,
  },
  peperContent: {
    height: '47%',
    position: 'relative',
    zIndex: 10,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingLeft: '7%',
    paddingRight: '7%',
    boxSizing: 'border-box',
    background: 'transparent',
    zIndex: 2,
  },
  button: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  const [activeStep, setActiveStep] = React.useState(0)
  const lastItem = stepperItem.length - 1

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === lastItem ? (prevActiveStep = 0) : prevActiveStep + 1
    )
  }

  const handleBack = () => {
    setActiveStep((nextActiveStep) =>
      nextActiveStep === 0 ? (nextActiveStep = lastItem) : nextActiveStep - 1
    )
  }

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
          <Typography variant='h4'>{stepperItem[activeStep].title}</Typography>
          <Typography variant='body1'>
            {stepperItem[activeStep].text}
          </Typography>
        </Paper>
      </div>
      <div className={classes.button}>
        <Fab
          className={classes.arrow}
          size='small'
          color='primary'
          aria-label='prev'
          onClick={handleBack}
        >
          <KeyboardArrowLeft />
        </Fab>
        <Fab
          className={classes.arrow}
          size='small'
          color='primary'
          aria-label='prev'
          onClick={handleNext}
        >
          <KeyboardArrowRight />
        </Fab>
      </div>
    </div>
  )
}

export default StepperContent
