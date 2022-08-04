// To build for website run 'npm run deploy'

import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import useFn2Logic from "./Components/useFn2Logic";
import Navbar, { ROUTES } from "./Components/Navbar";
import About from "./Components/About";
import Design from "./Components/Design";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { fn2CallbackHandler, response, setResponse } = useFn2Logic();
  // this will be the main function that calls fn2 that calls other functions.
  const fn1 = () => {
    // thinking animation
    function thinking() {
      setTimeout(() => {
        setResponse(".");
        console.log(100);
      }, 100);
      setTimeout(() => {
        setResponse("..");
        console.log(800);
      }, 800);
      setTimeout(() => {
        setResponse("...");
        console.log(1600);
      }, 1600);
    }
    thinking();
    // end of thinking animation.
    // calls main logic function.
    setTimeout(() => {
      console.log("fn1 fired");
      fn2CallbackHandler();
    }, 2600);

    function resetFace() {
      setTimeout(() => {
        setResponse("._____.");
      }, 20000);
    }
    // "resetFace function does not restart after each function call."
    // resetFace();
  }; // end of fn1

  // this is rendering the components
  return (
    <div className="App">
      <Router basename="/hueV3">
        <Navbar />

        <Routes>
          {/* Home page */}
          <Route
            // Old path
            // path={ROUTES.HOME}
            path={"/"}
            exact={true}
            element={
              <>
                <HueText response={response} />
                <InputBox />
                <MainButton fn1={fn1} setResponse={setResponse} />
              </>
            }
          />

          {/* Home page END */}

          <Route
            path={ROUTES.DESIGN}
            element={
              <>
                <div>
                  <Design />
                </div>
              </>
            }
          />

          {/* About page */}
          <Route
            path={ROUTES.ABOUT}
            element={
              <>
                <div>
                  <About />
                </div>
              </>
            }
          />
          {/* About page END*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
