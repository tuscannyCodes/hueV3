const useTimeResponseLogic = (response, setResponse) => {
  // This controls the state for the text being displayed
  //   const [response, setResponse] = useState(".__.");
  // callback function to place function inside of fn1
  function TimeResponseCallbackHandler() {
    function TimeResponse() {
      let time = new Date(); // This is for the time.
     
      let timerId;
      let userInput = document.getElementById("mainInputBox").value;
      //TIME RESPONSE
      if (userInput.includes(" time")) {
        timerId = setInterval(currentTime, 10);

        function currentTime() {
          let updatedTime = new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            //second: "numeric",
            hour12: true,
          });

          setResponse("The time is"  + updatedTime};
        }
      }
    }
  }
  return {  TimeResponseCallbackHandler };
};

export default useGreetingsLogic;
