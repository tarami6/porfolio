import React, { Suspense } from "react";
import "./App.css";
import SuspenseComp from "./components/SuspenseComp";

const Banner = React.lazy(() => import("./components/banner/Banner"));
const AmdocsScreen = React.lazy(() => import("./sections/amdocsScreen"));
const DoobleScreen = React.lazy(() => import("./sections/doobleScreen/"));
const ZerBayad = React.lazy(() =>
  import("./components/zerBayad/ZerBayad")
);
const TimeFreek = React.lazy(() =>
  import("./components/timeFreek/TimeFreek")
);
const FixForYou = React.lazy(() =>
  import("./components/fixForYou/FixForYou")
);
const FirstMobile = React.lazy(() =>
  import("./components/mobile/firstScreen/FirstMobile")
);
const SecondMobile = React.lazy(() =>
  import("./components/mobile/secondScreen/SecondMobile")
);
const ThirdMobile = React.lazy(() =>
  import("./components/mobile/thirdScreen/ThirdMobile")
);
const FourthMobile = React.lazy(() =>
  import("./components/mobile/fourthScreen/FourthMobile")
);
const SecondTablet = React.lazy(() =>
  import("./components/tablet/secondScreen/SecondTablet")
);
const ThirdTablet = React.lazy(() =>
  import("./components/tablet/thirdScreen/ThirdTablet")
);
const FourthTablet = React.lazy(() =>
  import("./components/tablet/fourthScreen/FourthTablet")
);

const Mobile = () => (
  <div className="AppMobile">
    <Suspense fallback={<SuspenseComp />}>
      <FirstMobile />
      <SecondMobile />
      <ThirdMobile />
      <FourthMobile />
    </Suspense>
  </div>
);

const Desktop = () => (
  <div className="App">
    <Suspense fallback={<SuspenseComp />}>
      <Banner />
      <AmdocsScreen />
      <DoobleScreen />
      <ZerBayad />
      <TimeFreek />
      <FixForYou />
    </Suspense>
  </div>
);

const Tablet = () => (
  <div className="App">
    <Suspense fallback={<SuspenseComp />}>
      <FirstMobile />
      <SecondTablet />
      <ThirdTablet />
      <FourthTablet />
    </Suspense>
  </div>
);

function App() {
  const screen = window.innerWidth;

  if (screen < 500) {
    return <Mobile />;
  } else if (screen > 1024) {
    return <Desktop />;
  }

  return <Tablet />;
}

export default App;
