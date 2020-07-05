import './App.css'
import Banner from './components/banner/Banner'
import React from 'react'
import SecondScreen from './components/secondScreen/SecondScreen'
import ThirdScreen from './components/thirdScreen/ThirdScreen'
import FourthScreen from './components/fourthScreen/FourthScreen'
import FifthScreen from './components/fifthScreen/FifthScreen'

function App() {
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
}

export default App
