import { useState }from "react";

const useTimeResponseLogic = (setResponse) => {
  // This controls the state for the text being displayed
  //   const [response, setResponse] = useState(".__.");
  // callback function to place function inside of fn1

  
 const [ theCurrentTime, setTheCurrentTime] = useState("hello");
  function timeResponseCallbackHandler() {
    setTimeout(function getTimeResponse() {
      // let time = new Date(); // This is for the time.
      let userInput = document.getElementById("mainInputBox").value;
      //TIME RESPONSE
      if (userInput.includes(" time")) {
        currentTime();
        function currentTime() {
          let updatedTime = new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          });
          setTheCurrentTime(updatedTime);
          setResponse(`The time is ${updatedTime}`);
          // *** this displays "the time as initial state then after displays old time".
        }
      }
    }, 2600);
    console.log(theCurrentTime)
  }
  return { timeResponseCallbackHandler };
};

export default useTimeResponseLogic;
