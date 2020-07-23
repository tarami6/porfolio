import '../../../App.css'
import React from 'react'

import { animated, useSpring } from 'react-spring'

import cinq from '../../../assets/images/5.png'
import dix from '../../../assets/images/10.png'
import huite from '../../../assets/images/8.png'
import quatre from '../../../assets/images/4.png'
import sept from '../../../assets/images/7.png'
import six from '../../../assets/images/4.png'
import trois from '../../../assets/images/3.png'
import un from '../../../assets/images/1.png'

function Background() {
  // custum bgAnims for all background item
  const { bgAnim } = useSpring({
    from: { bgAnim: 0, anim: 100 },
    to: async (bgAnim) => {
      while (1) {
        await bgAnim({ bgAnim: 1 })
      }
    },
    config: { duration: 6000 },
    reset: true,
  })

  // Setting of background images
  const bgImg = [
    {
      src: un,
      alt: 'un',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 0.5, 1], output: [0, 15, 0] })
          .interpolate((x) => `translate(0,${x * -1}px)`),
        display: 'block',
        position: 'absolute',
        width: '2%',
        left: '13%',
        bottom: '40%',
      },
    },
    {
      src: trois,
      alt: 'trois',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 1], output: [0, 360] })
          .interpolate((x) => `rotate(${x}deg)`),
        display: 'block',
        position: 'absolute',
        width: '2%',
        top: '30%',
        left: '18%',
      },
    },
    {
      src: quatre,
      alt: 'quatre',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 0.5, 1], output: [0, 15, 0] })
          .interpolate((x) => `translate(0,${x}px)`),
        display: 'block',
        position: 'absolute',
        width: '30vw',
        left: '10%',
        bottom: '10%',
      },
    },
    {
      src: cinq,
      alt: 'cinq',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 1], output: [0, 360] })
          .interpolate((x) => `rotate(${x}deg)`),
        display: 'block',
        position: 'absolute',
        width: '4%',
        right: '10%',
        bottom: '40%',
      },
    },
    {
      src: six,
      alt: 'six',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 0.5, 1], output: [0, 15, 0] })
          .interpolate((x) => `translate(0,${x * -1}px)`),
        display: 'block',
        position: 'absolute',
        width: '30vw',
        right: '10%',
        bottom: '-30%',
      },
    },
    {
      src: sept,
      alt: 'sept',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 0.5, 1], output: [0, 20, 0] })
          .interpolate((x) => `translate(0,${x}px)`),
        display: 'block',
        position: 'absolute',
        width: '9%',
        right: '18%',
        bottom: '58%',
        zIndex: '2',
      },
    },
    {
      src: huite,
      alt: 'huite',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 0.5, 1], output: [0, 20, 0] })
          .interpolate((x) => `translate(0,${x * -1}px)`),
        display: 'block',
        position: 'absolute',
        width: '3%',
        right: '35%',
        top: '21%',
      },
    },
    {
      src: dix,
      alt: 'dix',
      style: {
        transform: bgAnim
          .interpolate({ range: [0, 0.5, 1], output: [0, 20, 0] })
          .interpolate((x) => `translate(0,${x * -1}px)`),
        display: 'block',
        position: 'absolute',
        width: '17%',
        left: '15%',
        bottom: '3%',
        zIndex: '2',
      },
    },
  ]

  return (
    <div className='container'>
      <div className='background'>
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
    </div>
  )
}

export default Background
