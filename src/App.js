import './App.css'
import Banner from './components/banner/Banner'
import React from 'react'
import SecondScreen from './components/secondScreen/SecondScreen'
import ThirdScreen from './components/thirdScreen/ThirdScreen'
import FourthScreen from './components/fourthScreen/FourthScreen'
import FifthScreen from './components/fifthScreen/FifthScreen'
import FirstMobile from './components/mobile/firstScreen/FirstMobile'
import SecondMobile from './components/mobile/secondScreen/SecondMobile'
import ThirdMobile from './components/mobile/thirdScreen/ThirdMobile'
import FourthMobile from './components/mobile/fourthScreen/FourthMobile'
import SecondTablet from './components/tablet/secondScreen/SecondTablet'
import ThirdTablet from './components/tablet/thirdScreen/ThirdTablet'
import FourthTablet from './components/tablet/fourthScreen/FourthTablet'

function App() {
  const screen = window.innerWidth

  if (screen < 500) {
    return (
      <div className='App'>
        <div>
          <FirstMobile />
        </div>
        <div>
          <SecondMobile />
        </div>
        <div>
          <ThirdMobile />
        </div>
        <div>
          <FourthMobile />
        </div>
      </div>
    )
  } else if (screen > 1024) {
    return (
      <div className='App'>
        <div>
          <Banner />
        </div>
        <div>
          <SecondScreen />
        </div>
        <div>
          <FourthScreen />
        </div>
        <div>
          <ThirdScreen />
        </div>
        <div>
          <FifthScreen />
        </div>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <div>
          <FirstMobile />
        </div>
        <div>
          <SecondTablet />
        </div>
        <div>
          <ThirdTablet />
        </div>
        <div>
          <FourthTablet />
        </div>
      </div>
    )
  }
}

export default App
