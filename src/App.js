// To build for website run 'npm run deploy'

import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import useFn2Logic from "./Components/useFn2Logic";
import Navbar, { ROUTES } from "./Components/Navbar";
import About from "./Components/About";
import Design from "./Components/Design";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
              
  
              <motion.div
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 100 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      
                <HueText response={response} />
                
                <InputBox />
                <MainButton fn1={fn1} setResponse={setResponse} />
                </motion.div>
               
                  
              </>
            }
          />

          {/* Home page END */}

          <Route
            path={ROUTES.DESIGN}
            element={
              <>
                  
                <div>
                  <motion.div
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 100 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
                  <Design />
                  </motion.div>
                  
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
                <motion.div
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 100 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
                  <About />
                  </motion.div>
                </div>
              </>
            }
          />
          {/* About page END*/}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
