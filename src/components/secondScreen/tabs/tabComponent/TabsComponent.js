import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs } from "@material-ui/core";
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
      backgroundColor: "#d1d1d1",
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

const TabsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper elevation={4}>
      <div position="static" className={classes.appBar}>
        <AnTabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <AntTab label="How my day looks like" />
          <AntTab label="What I loved" />
          <AntTab label="What I learn" />
          <AntTab label="What was the stack" />
        </AnTabs>
      </div>
      <TabPanel value={value} index={0}>
        Lorem Ipsum is symply dummy text of printing and typeseting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a gallery of type and scanmbled it
        to make a type specimen book. It has survived not only five centries but
        also into electronic typeseting remaining essentially unchanged. It was
        populared in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passaages, and more recently with desketop publishing
        software like Aldus PageMaker including version of Lorem Ipsum.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus alias
        mollitia molestiae excepturi accusamus quas nostrum, tempora iusto
        aliquam. Voluptatem a expedita neque et dolore! Voluptas delectus,
        aspernatur deserunt ipsam rerum numquam consectetur asperiores aliquam
        possimus, corrupti sit minima exercitationem cum veritatis in? Quis,
        voluptas minus provident optio doloribus similique aperiam laudantium
        quidem quibusdam necessitatibus fugiat aliquam ut eaque at sint deserunt
        unde tenetur vitae iusto exercitationem asperiores error. Omnis!
      </TabPanel>
      <TabPanel value={value} index={2}>
        Repellat sequi sunt numquam incidunt? Voluptate modi, quaerat, dolores
        quam officia similique dolorem amet ipsa sed perferendis assumenda magni
        ad. Vero quo maxime cum quod ea facere consectetur nisi facilis
        laudantium necessitatibus? Dicta labore nesciunt tempore et voluptates
        minus quia sapiente deserunt ullam suscipit assumenda enim maiores,
        architecto culpa modi repudiandae id. Harum id nulla alias est dolorem
        necessitatibus cumque molestiae ipsa aut a nostrum voluptates esse
        consequatur provident voluptas libero, dicta nihil laudantium.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        deserunt accusamus ipsam. Cupiditate, obcaecati earum. Hic nihil nemo
        optio quis unde recusandae ullam id, tempore, nisi nobis amet officiis
        sapiente ipsum deserunt aperiam quisquam fugiat adipisci soluta libero
        temporibus ratione minima dicta architecto provident? Et, unde a! Modi
        architecto aliquid eius. Delectus totam ullam minus! Itaque ab assumenda
        consectetur laboriosam tenetur quis fugit, ullam sed minus reprehenderit
        quibusdam. Maxime, sed?
      </TabPanel>
    </Paper>
  );
};

export default TabsComponent;
