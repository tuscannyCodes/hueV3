import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import useFn2Logic from "./Components/useFn2Logic";

function App() {
  const { fn2CallbackHandler, response, setResponse } = useFn2Logic();
    // this will be the main function that calls fn2 that calls other functions.
    const fn1 = () => {
    // thinking animation
    function thinking() {
      setTimeout(() => {
        setResponse(".");
      }, 100);
      setTimeout(() => {
        setResponse("..");
      }, 800);
      setTimeout(() => {
        setResponse("...");
      }, 1600);
    }
    thinking();
    // end of thinking animation.
    // calls main logic function. 
    setTimeout(() => {
      fn2CallbackHandler();
    }, 2600);
  }; // end of fn1

  // this is rendering the components
  return (
    <div className="App">
      <HueText response={response} />
      <InputBox />
      <MainButton fn1={fn1} setResponse={setResponse} />
    </div>
  );
}

export default App;
