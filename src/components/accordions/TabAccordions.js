import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

const TabAccordions = ({ data }) => {
  const [expanded, setExpanded] = React.useState('')
  const {
    content: {
      subTitle1,
      subContent1,
      subTitle2,
      subContent2,
      subTitle3,
      subContent3,
    },
  } = data

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls='panel1d-content'
          expandIcon={<ExpandMoreIcon />}
          id='panel1d-header'
        >
          <Typography>{subTitle1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{subContent1}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          aria-controls='panel2d-content'
          expandIcon={<ExpandMoreIcon />}
          id='panel2d-header'
        >
          <Typography>{subTitle2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{subContent2}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          aria-controls='panel3d-content'
          expandIcon={<ExpandMoreIcon />}
          id='panel3d-header'
        >
          <Typography>{subTitle3}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{subContent3}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default TabAccordions
