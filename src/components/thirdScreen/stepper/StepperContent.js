import "fontsource-roboto";

import { Fab, Paper, Typography } from "@material-ui/core";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import image1 from "../../../assets/images/image-1.png";
import image2 from "../../../assets/images/image-2.png";
import { makeStyles } from "@material-ui/core/styles";

const stepperItem = [
  {
    title: "The Idia",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam asperiores nesciunt exercitationem doloremque minima? Consectetur perspiciatis sit eos ad sequi enim fuga provident, nobis vitae. Ratione, necessitatibus laudantium velit et fugiat, culpa harum itaque, impedit vitae corrupti minus praesentium. Alias id nemo natus enim dolorem rerum. ",
  },
  {
    title: "Lorem ",
    text:
      "Aliquid fugit perspiciatis minus molestiae eveniet blanditiis officia autem reiciendis accusantium aliquam unde veritatis commodi, totam ex eligendi. Praesentium quas delectus, nulla quaerat, facilis, in ducimus laborum sint  eius eum iure cum minus. Dolorum adipisci ducimus ab sequi provident asperiores aut rerum eaque officiis obcaecati!",
  },
];
const useStyle = makeStyles((theme) => ({
  root: {},
  content: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    position: "relative",
    fontFamily: "roboto",
  },
  image1: {
    width: "28%",
    position: "absolute",
    left: "23%",
    top: "2%",
  },
  image2: {
    width: "23%",
    position: "relative",
    left: "4%",
  },
  paper: {
    width: "50%",
    padding: "3% 3% 3% 11%",
    margin: "2% 13% 1% 0%",
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "13%",
  },
  arrow: {
    margin: theme.spacing(1),
    backgroundColor: "#4c23ea",
  },
}));

const StepperContent = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const lastItem = stepperItem.length - 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === lastItem ? (prevActiveStep = 0) : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((nextActiveStep) =>
      nextActiveStep === 0 ? (nextActiveStep = lastItem) : nextActiveStep - 1
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img src={image2} alt="image2" className={classes.image2} />
        <img src={image1} alt="image1" className={classes.image1} />

        <Paper square elevation={0} className={classes.paper}>
          <Typography variant="h4">{stepperItem[activeStep].title}</Typography>
          <Typography>{stepperItem[activeStep].text}</Typography>
        </Paper>
      </div>
      <div className={classes.button}>
        <Fab
          className={classes.arrow}
          size="small"
          color="primary"
          aria-label="prev"
          onClick={handleBack}
        >
          <KeyboardArrowLeft />
        </Fab>
        <Fab
          className={classes.arrow}
          size="small"
          color="primary"
          aria-label="prev"
          onClick={handleNext}
        >
          <KeyboardArrowRight />
        </Fab>
      </div>
    </div>
  );
};

export default StepperContent;
