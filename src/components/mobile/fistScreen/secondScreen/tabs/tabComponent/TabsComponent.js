import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs, Typography } from "@material-ui/core";
import TabPanel from "../tabPanel/TabPanel";

const AnTabs = withStyles({
  root: {
    flex: 1,
  },
  indicator: {
    backgroundColor: "#3210BD",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    flex: 1,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    color: '#888',
    fontSize: '2vh',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#3210b2',
      color: 'white',
    },
    '&:focus': {
      color: 'white',
      backgroundColor: '#3210b2',
    },
  },
  selected: {
    color: 'white',
    backgroundColor: '#3210b2',
  },
}))((props) => <Tab {...props} />)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textTransform: 'none',
  },
  appBar: {
    flexGrow: 1,
    backgroundColor: '#e0e0e0',
  },
  paper: {
    height: '30vh',
    overflow: 'hidden',
  },
  tabpanel: {
    fontSize: '1.7vh'
  },
}))

const TabsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper elevation={4} className={classes.paper}>
      <div position='static' className={classes.appBar}>
        <AnTabs
          value={value}
          variant='fullWidth'
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <AntTab label='How my day' />
          <AntTab label='What I loved' />
          <AntTab label='What I learn' />
        </AnTabs>
      </div>
      <TabPanel value={value} index={0}>
        <Typography className={classes.tabpanel}>
          Lorem Ipsum is symply dummy text of printing and typeseting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a gallery of type and scanmbled it
          to make a type specimen book.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography className={classes.tabpanel}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          alias mollitia molestiae excepturi accusamus quas nostrum, tempora
          molestiae excepturi accusamus quas iusto mollitia molestiae excepturi
          accusamus quas nostrum, tempora quas iusto aliquam.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography className={classes.tabpanel}>
          Repellat sequi sunt numquam incidunt? Voluptate modi, quaerat, dolores
          quam officia similique dolorem amet ipsa sed perferendis assumenda
          magni ad. Vero quo maxime cum quod ea facere consectetur nisi facilis
          laudantium necessitatibus?
        </Typography>
      </TabPanel>
    </Paper>
  )
};

export default TabsComponent;
