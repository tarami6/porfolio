import React from "react";
import deux from "../../assets/images/2.png";
import Typical from "react-typical";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    height: "100vh",
    position: "relative",
  },
  square: {
    width: "50%",
    height: "60%",
    background: "linear-gradient(0deg,#4c23ea, #eb3da1)",
    position: "absolute",
    bottom: "0",
    zIndex: "1",
  },

  block: {
    display: "flex",
    width: "50%",
    position: "absolute",
    justifyContent: "center",
    bottom: "0",
    zIndex: "2",
    color: "white",
  },
  image: {
    width: "90%",
  },
}));

const Banner = () => {
  const classes = useStyle();
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
  });

  return (
    <div>
      <Grid container justify="center">
        {/* Square */}
        <animated.div className={classes.square} style={animContent} />

        {/* image */}
        <animated.div style={animContent} src={deux} className={classes.block}>
          <animated.div className="text">
            <h1>Hi, I'm Rami,</h1>
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                "UI/UX Designer,",
                1000,
                "Web Developer,",
                1000,
                "Freelancer,",
                1000,
                "Tech Leader.",
                2000,
              ]}
            />
          </animated.div>
          <animated.img src={deux} alt="Rami" className={classes.image} />
        </animated.div>
      </Grid>
    </div>
  );
};

export default Banner;
