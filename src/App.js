import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import useGreetingsLogic from "./Components/useGreetingsLogic";
import useResetResponseLogic from "./Components/useResetResponseLogic";
function App() {
  // const { responseCallbackHandler, response, setResponse } =
  //   useGreetingsLogic();
const {resetResponseCallback,response, setResponse} = useResetResponseLogic();
  // this will be the main function that calls other functions.

  const Fn1 = () => {
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
    // responseCallbackHandler();
    resetResponseCallback();
  }; // end of fn1

  // this is rendering the components
  return (
    <div className="App">
      <HueText response={response} />
      <InputBox />
      <MainButton fn1={Fn1} setResponse={setResponse} />
    </div>
  );
}

export default App;
