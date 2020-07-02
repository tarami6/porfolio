import 'fontsource-roboto'

import { Fab, Paper, Typography } from '@material-ui/core'

import { animated, useSpring } from 'react-spring'

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import React from 'react'
import image1 from '../../../assets/images/image-12.png'
import image2 from '../../../assets/images/image-11.png'
import { makeStyles } from '@material-ui/core/styles'

const stepperItem = [
  {
    title: 'The Idia',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam asperiores nesciunt exercitationem doloremque minima? Consectetur perspiciatis sit eos ad sequi enim fuga provident, nobis vitae. Ratione, necessitatibus laudantium velit et fugiat, culpa harum itaque, impedit vitae corrupti minus praesentium. Alias id nemo natus enim dolorem rerum. ',
  },
  {
    title: 'Lorem ',
    text:
      'Aliquid fugit perspiciatis minus molestiae eveniet blanditiis officia autem reiciendis accusantium aliquam unde veritatis commodi, totam ex eligendi. Praesentium quas delectus, nulla quaerat, facilis, in ducimus laborum sint  eius eum iure cum minus. Dolorum adipisci ducimus ab sequi provident asperiores aut rerum eaque officiis obcaecati!',
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
          <Typography variant='h4'>{stepperItem[activeStep].title}</Typography>
          <Typography>{stepperItem[activeStep].text}</Typography>
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
