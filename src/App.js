import React, { Suspense, lazy } from 'react'
import './App.css'
import SuspenseComp from './components/SuspenseComp'

const Banner = lazy(() => import('./components/banner/Banner'))
const AmdocsScreen = lazy(() => import('./sections/amdocsScreen'))
const DoobleScreen = lazy(() => import('./sections/doobleScreen/'))
const ZerBayad = lazy(() => import('./components/zerBayad/ZerBayad'))
const TimeFreek = lazy(() => import('./components/timeFreek/TimeFreek'))
const FixForYou = lazy(() => import('./components/fixForYou/FixForYou'))
const FirstMobile = lazy(() =>
  import('./components/mobile/firstScreen/FirstMobile')
)
const SecondMobile = lazy(() =>
  import('./components/mobile/secondScreen/SecondMobile')
)
const ThirdMobile = lazy(() =>
  import('./components/mobile/thirdScreen/ThirdMobile')
)
const FourthMobile = lazy(() =>
  import('./components/mobile/fourthScreen/FourthMobile')
)
const FirstTablet = lazy(() =>
  import('./components/tablet/firstScreen/FirstTablet')
)
const SecondTablet = lazy(() =>
  import('./components/tablet/secondScreen/SecondTablet')
)
const ThirdTablet = lazy(() =>
  import('./components/tablet/thirdScreen/ThirdTablet')
)
const FourthTablet = lazy(() =>
  import('./components/tablet/fourthScreen/FourthTablet')
)

const Mobile = () => (
  <div className='AppMobile'>
    <Suspense fallback={<SuspenseComp />}>
      <FirstMobile />
      <SecondMobile />
      <ThirdMobile />
      <FourthMobile />
    </Suspense>
  </div>
)

const Desktop = () => (
  <div className='App'>
    <Suspense fallback={<SuspenseComp />}>
      <Banner />
      <AmdocsScreen />
      <DoobleScreen />
      <ZerBayad />
      <TimeFreek />
      <FixForYou />
    </Suspense>
  </div>
)

const Tablet = () => (
  <div className='App'>
    <Suspense fallback={<SuspenseComp />}>
      <FirstTablet />
      <AmdocsScreen />
      <DoobleScreen />
      <SecondTablet />
      <ThirdTablet />
      <FourthTablet />
    </Suspense>
  </div>
)

function App() {
  const screen = window.innerWidth

  if (screen < 500) {
    return <Mobile />
  } else if (screen > 1024) {
    return <Desktop />
  }

  return <Tablet />
}

export default App
