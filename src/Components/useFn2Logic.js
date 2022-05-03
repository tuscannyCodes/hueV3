import { useState } from "react";
import useGreetingsLogic from "./useGreetingsLogic";
const useFn2Logic = () => {
  // This controls the state for the text being displayed
  const [response, setResponse] = useState(".__.");
  const { responseCallbackHandler } =
  useGreetingsLogic(response, setResponse);
  // callback function to place function inside of fn1
  function fn2CallbackHandler() {

    function fn2(){

responseCallbackHandler();

    };
    fn2();
  };
  return { fn2CallbackHandler, response, setResponse };
};

export default useFn2Logic;
