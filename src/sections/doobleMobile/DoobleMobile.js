import 'fontsource-roboto'
import React, { useState } from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring } from 'react-spring'

import bg1 from '../../assets/images/bg-1.png'
import bg2 from '../../assets/images/bg-2.png'
import lock from '../../assets/images/lock.png'
import { makeStyles } from '@material-ui/core/styles'
import vector from '../../assets/images/vector.png'
import { Dooble } from '../../assets/data/data'
import TabAccordions from '../../components/accordions'

const useStyle = makeStyles(() => ({
  root: {
    width: '100vw',
    minHeight: '450px',
    fontFamily: 'roboto',
    position: 'relative',
    overflow: 'hidden',
    padding: '50px 15px 30px 15px',
    backgroundColor: '#fefefe',
  },
  bgLeft: {
    width: '36%',
    position: 'absolute',
    top: '150px',
    left: '-10%',
  },
  bgRight: {
    width: '40%',
    position: 'absolute',
    top: '350px',
    right: '-2%',
  },
  lock: {
    width: '18%',
    position: 'absolute',
    top: '170px',
    left: '2%',
  },
  vector: {
    width: '35%',
    position: 'absolute',
    right: '-2%',
    top: '350px',
  },
  year: {
    color: '#eb3da1',
  },
  underline: {
    display: 'flex',
    width: '0px',
    height: '3px',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: '#eb3da1',
    margin: '6px',
  },
  line: {
    width: '20px',
    height: '3px',
    backgroundColor: '#4c23ea',
  },
}))

const DoobleMobile = () => {
  const classes = useStyle()
  const [on, toogle] = useState(false)
  const zoom = useSpring({
    transform: on ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 1500 },
  })

  const size = useSpring({
    width: on ? '120px' : '0px',
    config: { duration: 1500 },
  })

  return (
    <div className={classes.root}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!on) toogle(true)
        }}
        onLeave={() => {
          toogle(false)
        }}
      />
      <img src={bg1} alt='bg1' className={classes.bgLeft} />
      <animated.img
        src={lock}
        alt='lock'
        className={classes.lock}
        style={zoom}
      />
      <animated.img src={bg2} alt='bg2' className={classes.bgRight} />
      <animated.img
        src={vector}
        alt='vector'
        className={classes.vector}
        style={zoom}
      />

      <Grid
        container
        direction='column'
        alignItems='center'
        wrap='nowrap'
        style={{ zIndex: '10', paddingBottom: '1em' }}
      >
        <h1 className={classes.year}>2019-2020</h1>
        <animated.div className={classes.underline} style={size}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </animated.div>
        <Typography variant='h6' style={{ color: '#666' }}>
          Dooble
        </Typography>

        <Box component='span' m={2} style={{ zIndex: '10', color: '#212121' }}>
          <h2>Under confidentiality agreement (Cyber-Enterprise)</h2>
        </Box>
      </Grid>
      <TabAccordions data={Dooble} />
    </div>
  )
}

export default DoobleMobile
