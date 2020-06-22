import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";

import un from "./assets/images/1.png";
import trois from "./assets/images/3.png";
import quatre from "./assets/images/4.png";
import cinq from "./assets/images/5.png";
import six from "./assets/images/4.png";
import sept from "./assets/images/7.png";
import huite from "./assets/images/8.png";
import dix from "./assets/images/10.png";

import NavBar from "./components/appBar/NavBar";
import Banner from "./components/banner/Banner";
import SecondScreen from "./components/secondScreen/SecondScreen";

function App() {
  // custum bgAnims for all background item
  const { bgAnim } = useSpring({
    from: { bgAnim: 0, anim: 100 },
    to: async (bgAnim) => {
      while (1) {
        await bgAnim({ bgAnim: 1 });
      }
    },
    config: { duration: 6000 },
    reset: true,
  });

  // Line animation

  const lines = useSpring({
    from: { transform: "translateY(0vh)" },
    to: async (bgAnim) => {
      while (1) {
        await bgAnim({ transform: "translateY(100vh)" });
      }
    },
    config: { duration: 8000 },
    reset: true,
  });

  // Setting of background images
  const bgImg = [
    {
      src: un,
      alt: "un",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 0.5, 1],
            output: [0, 15, 0],
          })
          .interpolate((x) => `translate(0,${x}px)`),
      },
    },
    {
      src: trois,
      alt: "trois",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 1],
            output: [0, 360],
          })
          .interpolate((x) => `rotate(${x}deg)`),
      },
    },
    {
      src: quatre,
      alt: "quatre",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 0.5, 1],
            output: [0, 15, 0],
          })
          .interpolate((x) => `translate(0,${x}px)`),
      },
    },
    {
      src: cinq,
      alt: "cinq",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 1],
            output: [0, 360],
          })
          .interpolate((x) => `rotate(${x}deg)`),
      },
    },
    {
      src: six,
      alt: "six",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 0.5, 1],
            output: [0, 15, 0],
          })
          .interpolate((x) => `translate(0,${x * -1}px)`),
      },
    },
    {
      src: sept,
      alt: "sept",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 0.5, 1],
            output: [0, 20, 0],
          })
          .interpolate((x) => `translate(0,${x}px)`),
      },
    },
    {
      src: huite,
      alt: "huite",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 0.5, 1],
            output: [0, 20, 0],
          })
          .interpolate((x) => `translate(0,${x * -1}px)`),
      },
    },
    {
      src: dix,
      alt: "dix",
      style: {
        transform: bgAnim
          .interpolate({
            range: [0, 0.5, 1],
            output: [0, 20, 0],
          })
          .interpolate((x) => `translate(0,${x * -1}px)`),
      },
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <Banner />

        <div className="background">
          {bgImg.map((img, index) => (
            <animated.img
              key={index}
              src={img.src}
              alt={img.alt}
              className={img.alt}
              style={img.style}
            />
          ))}
        </div>

        {/* background bgAnim */}
        <div className="lines">
          <div className="l1">
            <animated.div className="l2" style={lines}></animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}></animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}></animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}></animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}></animated.div>
          </div>
        </div>
      </div>
      <SecondScreen />
    </div>
  );
}

export default App;

//onlocalHost or heroku deploy change to this in package.json

//"scripts": {
//"start": "serve -s build",
//"build": "react-scripts build",
//"test": "react-scripts test",
//"eject": "react-scripts eject",
//"heroku-postbuild": "npm run build"
//},
