import React, { Suspense, lazy } from 'react'
import './App.css'
import SuspenseComp from './components/SuspenseComp'

//imports Desk
const Banner = lazy(() => import('./components/banner/Banner'))
const AmdocsScreen = lazy(() => import('./sections/amdocsScreen'))
const DoobleScreen = lazy(() => import('./sections/doobleScreen'))
const ZerBayad = lazy(() => import('./components/zerBayad/ZerBayad'))
const TimeFreek = lazy(() => import('./components/timeFreek/TimeFreek'))
const FixForYou = lazy(() => import('./components/fixForYou/FixForYou'))

//imports Mobile
const AmdocsMobile = lazy(() => import('./sections/amdocsMobile'))
const DoobleMobile = lazy(() => import('./sections/doobleMobile'))
const BannerMobile = lazy(() =>
  import('./components/mobile/banner/BannerMobile')
)
const TimeFeekMobile = lazy(() =>
  import('./components/mobile/timeFeek/TimeFeekMobile')
)
const ZerBayadMobile = lazy(() =>
  import('./components/mobile/zerBayad/ZerBayadMobile')
)
const FixForYouMobile = lazy(() =>
  import('./components/mobile/fixForYou/FixForYouMobile')
)

//imports Tablet
const BannerTablet = lazy(() =>
  import('./components/tablet/banner/BannerTablet')
)
const TimeFeekTablet = lazy(() =>
  import('./components/tablet/timeFeek/TimeFeekTablet')
)
const ZerBayadTablet = lazy(() =>
  import('./components/tablet/zerBayad/ZerBayadTablet')
)
const FixForYouTablet = lazy(() =>
  import('./components/tablet/fixForYou/FixForYouTablet')
)

const Mobile = () => (
  <div className='AppMobile'>
    <Suspense fallback={<SuspenseComp />}>
      <BannerMobile />
      <AmdocsMobile />
      <DoobleMobile />
      <TimeFeekMobile />
      <ZerBayadMobile />
      <FixForYouMobile />
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
      <BannerTablet />
      <AmdocsScreen />
      <DoobleScreen />
      <TimeFeekTablet />
      <ZerBayadTablet />
      <FixForYouTablet />
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
