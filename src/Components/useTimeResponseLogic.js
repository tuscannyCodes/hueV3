// importing state from main logical component "useFn2Logic"
const useTimeResponseLogic = (setResponse) => {
  // callback function to place function inside of fn1
  function timeResponseCallbackHandler() {
    getTimeResponse();
    function getTimeResponse() {
      // ***need to replace this with ref
      let userInput = document.getElementById("mainInputBox").value;
      //TIME RESPONSE

      if (userInput.includes(" time")) {
        currentTime();
        // *** NEET TO CLEAR THIS INTERVAL SOMEWHERE

        function currentTime() {
          setInterval(currentTime, 60);
          let updatedTime = new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          });

          setResponse("the time is " + updatedTime);
        }
      }
    }
  }

  return { timeResponseCallbackHandler };
};

export default useTimeResponseLogic;
