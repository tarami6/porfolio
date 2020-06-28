import 'fontsource-roboto'

import { Box, Typography } from '@material-ui/core'

import React from 'react'
import StepperContent from './stepper/StepperContent'
import { makeStyles } from '@material-ui/core/styles'
import img from '../../assets/images/left-1.png'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '650px',
    backgroundColor: '#f1f1f1',
    position: 'relative',
    fontFamily: 'roboto',
  },
  img: {
    width: '8%',
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
const FourthScreen = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className='background'>
        <img src={img} alt='left' className={classes.img} />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h6' style={{ color: '#666' }}>
            E-Commerce
          </Typography>
          <Box component='span' style={{ color: '#212121' }}>
            <h1>Side Entrepreneurship</h1>
          </Box>
        </div>
        <StepperContent />
      </div>
    </div>
  )
}

export default FourthScreen
