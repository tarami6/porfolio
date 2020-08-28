import React from 'react'
import deux from '../../../assets/images/2.png'
import Typical from 'react-typical'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Background from './background'
import NavBar from '../../mobile/firstScreen/appBar'
import '../../../assets/fonts/RozhaOne-Regular.ttf'

const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'linear-gradient(0deg, #eb3da1, #4c23ea)',
    position: 'relative',
    overflow: 'hidden',
  },
  square: {
    width: '80%',
    height: '45%',
    background: 'linear-gradient(0deg,#4c23ea, #eb3da1)',
    position: 'absolute',
    boxShadow: '0 15px 18px 10px rgba(0,0,0,0.4)',
    bottom: '0',
  },

  block: {
    display: 'flex',
    width: '80%',
    position: 'absolute',
    justifyContent: 'center',
    bottom: '0',
    zIndex: '2',
    overflowX: 'hidden',
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    display: 'flex',
    width: '100%',
    height: '12vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    right: 'calc(50% - 90px)',
    left: 0,
    bottom: 0,
    zIndex: '100',
    background: 'linear-gradient(0deg, #4c23ea, #4b23ea77, transparent)',
  },
  h1: {
    fontSize: '4vh',
    fontWeight: '400',
    margin: 0,
    height: '4vw',
  },
  span: {
    fontSize: '2.2vh',
    fontFamily: 'Poppins',
  },
}))

const FirstTablet = () => {
  const classes = useStyle()
  const animContent = useSpring({
    from: {
      transform: `scale(0)`,
      opacity: 0,
    },
    to: {
      transform: `scale(1)`,
      opacity: 1,
    },
    config: { duration: 1000 },
    delay: 1000,
  })

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <NavBar />
        <Background />
        <Grid container justify='center'>
          {/* Square */}
          <animated.div className={classes.square} style={animContent} />

          {/* image */}
          <animated.div
            style={animContent}
            src={deux}
            className={classes.block}
          >
            <animated.div className={classes.text}>
              <h1 className={classes.h1}>Hi, I'm Rami,</h1>
              <Typical
                className={classes.span}
                loop={Infinity}
                wrapper='span'
                steps={[
                  'UI/UX Designer,',
                  1000,
                  'Web Developer,',
                  1000,
                  'Freelancer,',
                  1000,
                  'Tech Leader.',
                  2000,
                ]}
              />
            </animated.div>
            <animated.img src={deux} alt='Rami' className={classes.image} />
          </animated.div>
        </Grid>
      </div>
    </div>
  )
}

export default FirstTablet
