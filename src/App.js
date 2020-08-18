import React, { Suspense } from 'react'
import './App.css'
import SuspenseComp from './components/SuspenseComp'

const Banner = React.lazy(() => import('./components/banner/Banner'))
const SecondScreen = React.lazy(() =>
  import('./components/secondScreen/SecondScreen')
)
const ThirdScreen = React.lazy(() =>
  import('./components/thirdScreen/ThirdScreen')
)
const FourthScreen = React.lazy(() =>
  import('./components/fourthScreen/FourthScreen')
)
const FifthScreen = React.lazy(() =>
  import('./components/fifthScreen/FifthScreen')
)
const FirstMobile = React.lazy(() =>
  import('./components/mobile/firstScreen/FirstMobile')
)
const SecondMobile = React.lazy(() =>
  import('./components/mobile/secondScreen/SecondMobile')
)
const ThirdMobile = React.lazy(() =>
  import('./components/mobile/thirdScreen/ThirdMobile')
)
const FourthMobile = React.lazy(() =>
  import('./components/mobile/fourthScreen/FourthMobile')
)
const SecondTablet = React.lazy(() =>
  import('./components/tablet/secondScreen/SecondTablet')
)
const ThirdTablet = React.lazy(() =>
  import('./components/tablet/thirdScreen/ThirdTablet')
)
const FourthTablet = React.lazy(() =>
  import('./components/tablet/fourthScreen/FourthTablet')
)

function App() {
  const screen = window.innerWidth

  if (screen < 500) {
    return (
      <div className='AppMobile'>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <FirstMobile />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <SecondMobile />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <ThirdMobile />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <FourthMobile />
          </Suspense>
        </div>
      </div>
    )
  } else if (screen > 1024) {
    return (
      <div className='App'>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <Banner />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <SecondScreen />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <FourthScreen />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <ThirdScreen />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <FifthScreen />
          </Suspense>
        </div>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <FirstMobile />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <SecondTablet />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <ThirdTablet />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<SuspenseComp />}>
            <FourthTablet />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default App
