import { useState } from "react";
 import useGreetingsLogic from "./useGreetingsLogic";
const useResetResponseLogic = () => {
    const { responseCallbackHandler, response, setResponse } =
       useGreetingsLogic();
  // This controls the state for the text being displayed
    // const [response, setResponse] = useState(".__.");
  // callback function to place function inside of fn1
  function resetResponseCallback() {
    setTimeout(function resetResponse() {
     
      
      setResponse("");
      console.log(response)
      
    }, 15000);
    // calls the previous logic function here
    responseCallbackHandler();
  }
  return { resetResponseCallback, response, setResponse };
};

export default useResetResponseLogic;
