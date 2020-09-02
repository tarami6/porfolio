import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {Fix4U} from '../../../../assets/data/data'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    overflowY: 'auto',
    padding: '40px',
    fontSize: '16px',
  },
}))

const Story = () => {
  const classes = useStyle()
  const allP = Object.keys(Fix4U.content)
  return (
    <div className={classes.root}>
      {allP.map((p, index) => (
        <p key={index} style={{ marginTop: '10px' }}>
          {Fix4U.content[p]}
        </p>
      ))}
    </div>
  )
}

export default Story
