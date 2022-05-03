import { useState } from "react";
import useGreetingsLogic from "./useGreetingsLogic";
import useTimeResponseLogic from "./useTimeResponseLogic";
const useFn2Logic = () => {
  // This controls the state for the text being displayed
 
  // STATE
  const [response, setResponse] = useState(".__.");
  // STATE END
  const {timeResponseCallbackHandler}= useTimeResponseLogic(setResponse);
  const { responseCallbackHandler } = useGreetingsLogic(response, setResponse);
  // callback function to place function inside of fn1
  function fn2CallbackHandler() {

    function fn2(){

responseCallbackHandler();
timeResponseCallbackHandler();
    };
    fn2();
  };
  return { fn2CallbackHandler, response, setResponse };
};

export default useFn2Logic;
