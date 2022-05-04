import React, { useCallback} from 'react';
import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import useFn2Logic from "./Components/useFn2Logic";

function App() {
  // const { responseCallbackHandler, response, setResponse } =
  //   useGreetingsLogic();
  const { fn2CallbackHandler, response, setResponse } = useFn2Logic();

  // this will be the main function that calls fn2 that calls other functions.
  const thinkingCallback = useCallback(() => {
    setTimeout(() => {
      setResponse(".");
    }, 100);
    setTimeout(() => {
      setResponse("..");
    }, 800);
    setTimeout(() => {
      setResponse("...");
    }, 1600);
  }, [setResponse]);

  const fn1Callback = useCallback(() => {
    // thinking animation
    // end of thinking animation.
    thinkingCallback();
    fn2CallbackHandler();
  }, [fn2CallbackHandler, thinkingCallback]);

  // this is rendering the components
  return (
    <div className="App">
      <HueText response={response} />
      <InputBox />
      <MainButton fn1={fn1Callback} setResponse={setResponse} />
    </div>
  );
}

export default App;
