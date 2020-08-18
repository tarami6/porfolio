import React from 'react'
import 'fontsource-roboto'
import { withStyles } from '@material-ui/core/styles'
import left from '../../../assets/images/screen4-1.png'
import right from '../../../assets/images/screen4-2.png'
import fix4u from '../../../assets/images/fix4u.png'
import { Button } from '@material-ui/core'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Story from './story'
import Style from './Style'

const AnButton = withStyles({
  root: {
    borderRadius: '50px',
  },
})(Button)

const FourthMobile = () => {
  const classes = Style()
  const [on, toogle] = React.useState(false)
  const bgColor = on ? 'rgba(0,0,0,0.1)' : 'none'
  return (
    <div className={classes.root} style={{ background: `${bgColor}` }}>
      <div className={classes.container}>
        <div className={classes.story}>{on && <Story />}</div>
        <div className={classes.titleContainer}>
          <div className={classes.titleContent}>
            <span style={{ color: '#666' }}>The subject chine</span>
            <div className={classes.inlineContent}>
              <h1>Chinise Startup</h1>
              <AnButton
                variant='contained'
                color='primary'
                disableElevation
                onClick={() => toogle(!on)}
              >
                Read the story {on && <KeyboardArrowDown />}
              </AnButton>
            </div>
          </div>
        </div>
      </div>
      <img src={fix4u} alt='right' className={classes.fix4u} />
      <img src={left} alt='left' className={classes.left} />
      <img src={right} alt='right' className={classes.right} />
    </div>
  )
}

export default FourthMobile
