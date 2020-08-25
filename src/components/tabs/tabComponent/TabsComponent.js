import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs,  } from "@material-ui/core";
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
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    color: "#888",
    "&:hover": {
      opacity: 1,
      backgroundColor: "#3210b2",
      color: "white",
    },
    "&:focus": {
      color: "white",
      backgroundColor: "#3210b2",
    },
  },
  selected: {
    color: "white",
    backgroundColor: "#3210b2",
  },
}))((props) => <Tab {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textTransform: "none",
  },
  appBar: {
    flexGrow: 1,
    backgroundColor: "#e0e0e0",
  },
}));

const TabsComponent = ({data,style}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data)
  const {content:{subTitle1, subContent1, subTitle2, subContent2, subTitle3, subContent3}} = data
  return (
    <Paper elevation={4}>
      <div position="static" className={classes.appBar}>
        <AnTabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <AntTab label={subTitle1} />
          <AntTab label={subTitle2} />
          <AntTab label={subTitle3} />
        </AnTabs>
      </div>
      <TabPanel value={value} index={0}>
        {subContent1}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {subContent2}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {subContent3}
      </TabPanel>
    </Paper>
  );
};

export default TabsComponent;
