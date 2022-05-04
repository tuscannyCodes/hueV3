import { useState, useCallback } from "react";
import useGreetingsLogic from "./useGreetingsLogic";
import useTimeResponseLogic from "./useTimeResponseLogic";


const useFn2Logic = () => {
  // This controls the state for the text being displayed
 
  // STATE
  const [response, setResponse] = useState(".__.");
  // STATE END
  const { timeResponseCallbackHandler } = useTimeResponseLogic();
  const { responseCallbackHandler } = useGreetingsLogic(response, setResponse);
  // callback function to place function inside of fn1
  const fn2CallbackHandler = useCallback(() => {
    responseCallbackHandler();
    timeResponseCallbackHandler();
  }, [timeResponseCallbackHandler, responseCallbackHandler]);

  return { fn2CallbackHandler, response, setResponse };
};

export default useFn2Logic;
