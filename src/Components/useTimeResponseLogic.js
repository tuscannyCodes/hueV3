// importing state from main logical component "useFn2Logic"
const useTimeResponseLogic = (setResponse) => {
  // callback function to place function inside of fn1
  function timeResponseCallbackHandler() {
    getTimeResponse();
    function getTimeResponse() {
      // ***need to replace this with ref
      let userInput = document.getElementById("mainInputBox").value.toLowerCase();
      //TIME RESPONSE
      if (userInput.includes("time")) {
        currentTime();
        function currentTime() {
          let updatedTime = new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            // second: "numeric",
            hour12: true,
          });
          console.log("timeresponse");
          setResponse("the time is " + updatedTime);
        }
      }
      
    }
  }

  return { timeResponseCallbackHandler };
};

export default useTimeResponseLogic;
