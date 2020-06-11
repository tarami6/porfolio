import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Typical from 'react-typical'
import './App.css';
import './assets/font-awesome/css/font-awesome.min.css';
import logo from './assets/logo.png';
import un from './assets/1.png';
import deux from './assets/2.png';
import trois from './assets/3.png';
import quatre from './assets/4.png';
import cinq from './assets/5.png';
import six from './assets/4.png';
import sept from './assets/7.png';
import huite from './assets/8.png';
import dix from './assets/10.png';

function App() {

  // custum bgAnims for all background item
  const { bgAnim } = useSpring({
    from: { bgAnim: 0, anim: 100 },
    to: async bgAnim => {
      while (1) {
        await bgAnim({ bgAnim: 1 });
      }
    },
    config: { duration: 6000 },
    reset: true
  });

  // Line animation

  const lines = useSpring({
    from: { transform: 'translateY(0vh)' },
    to: async bgAnim => {
      while (1) {
        await bgAnim({ transform: 'translateY(100vh)' });
      }
    },
    config: { duration: 8000 },
    reset: true
  });

  // Other animations that are not infinite
  const animContent = useSpring({
    from: {
      transform: `translateY(500px)`,
      opacity: 0
    },
    to: {
      transform: `translateY(0%)`,
      opacity: 1,
    },
    config: { duration: 1000 },
  })

  // Setting of background images
  const bgImg = [
    {
      src: un, alt: "un",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 0.5, 1], output: [0, 15, 0]
        }).interpolate((x) => `translate(0,${x}px)`)
      }
    },
    {
      src: trois, alt: "trois",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 1], output: [0, 360]
        }).interpolate((x) => `rotate(${x}deg)`)
      }
    },
    {
      src: quatre, alt: "quatre",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 0.5, 1], output: [0, 15, 0]
        }).interpolate((x) => `translate(0,${x}px)`)
      }
    },
    {
      src: cinq, alt: "cinq",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 1], output: [0, 360]
        }).interpolate((x) => `rotate(${x}deg)`)
      }
    },
    {
      src: six, alt: "six",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 0.5, 1], output: [0, 15, 0]
        }).interpolate((x) => `translate(0,${x * -1}px)`)
      }
    },
    {
      src: sept, alt: "sept",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 0.5, 1], output: [0, 20, 0]
        }).interpolate((x) => `translate(0,${x}px)`)
      }
    },
    {
      src: huite, alt: "huite",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 0.5, 1], output: [0, 20, 0]
        }).interpolate((x) => `translate(0,${x * -1}px)`)
      }
    },
    {
      src: dix, alt: "dix",
      style: {
        transform: bgAnim.interpolate({
          range: [0, 0.5, 1], output: [0, 20, 0]
        }).interpolate((x) => `translate(0,${x * -1}px)`)
      }
    }
  ];

  return (
    <div className="App">
      <div className="container">

        {/* background bgAnim */}
        <div className="background">
          {bgImg.map((img, index) =>
            <animated.img key={index}
              src={img.src}
              alt={img.alt}
              className={img.alt}
              style={img.style} />
          )}
        </div>
        <div className="lines">
          <div className="l1">
            <animated.div className="l2" style={lines}>
            </animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}>
            </animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}>
            </animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}>
            </animated.div>
          </div>
          <div className="l1">
            <animated.div className="l2" style={lines}>
            </animated.div>
          </div>

        </div>
        {/* Page content */}
        <header className="App-header">
          <nav>

            {/* logo */}
            <a href="#home">
              <div className="logo">
                <img src={logo} alt="logo" />
                <span>Rami Talisveiber</span>
              </div>
            </a>

            {/* socials icons */}
            <div className="nav-item">
              <a href="#facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="#facebook">
                <i className="fa fa-twitter" />
              </a>
              <a href="#facebook">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </nav>

          {/* Square */}
          <animated.div
            className="Square"
            style={animContent} />

          {/* image */}
          <animated.div className="image">
            <animated.div className="text">
              <h1>Hi, I'm Rami,</h1>
              <Typical
                loop={Infinity}
                wrapper='span'
                steps={[
                  'UI/UX Designer,',
                  1000,
                  'Web Developer,',
                  1000,
                  'Freelancer.',
                  2000
                ]}
              />
            </animated.div>
            <animated.img src={deux} alt="Rami"
              style={animContent} />
          </animated.div>
        </header>
      </div>
    </div>
  );
}

export default App;
