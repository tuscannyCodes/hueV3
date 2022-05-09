import { useState } from "react";
import useGreetingsLogic from "./useGreetingsLogic";
import useTimeResponseLogic from "./useTimeResponseLogic";
import useThanksLogic from "./useThanksLogic";
const useFn2Logic = () => {
  // This controls the state for the text being displayed
  let dynamicTime;

  // STATE
  const [response, setResponse] = useState(".__.");
  // STATE END
  const {ThanksCallbackHandler} = useThanksLogic(setResponse);
  const { timeResponseCallbackHandler } = useTimeResponseLogic(setResponse);
  const { responseCallbackHandler } = useGreetingsLogic(setResponse);
  // callback function to place function inside of fn1
  function fn2CallbackHandler() {
    function fn2() {
      let userInput = document.getElementById("mainInputBox").value;

      if (userInput.includes(" time")) {
        console.log("timer");
        dynamicTime = setInterval(timeResponseCallbackHandler, 50);
        //*this set interval is not being cleared
      } else {
        console.log(userInput);
        clearInterval(dynamicTime);
      }
      responseCallbackHandler();
      ThanksCallbackHandler();
    }

    fn2();
  }
  return { fn2CallbackHandler, response, setResponse };
};

export default useFn2Logic;
