const useTimeResponseLogic = (setResponse) => {
  // This controls the state for the text being displayed
  //   const [response, setResponse] = useState(".__.");
  // callback function to place function inside of fn1

  // stuck here for now having issues declaring variable.
  
  function timeResponseCallbackHandler() {
    setTimeout(function getTimeResponse() {
      // let time = new Date(); // This is for the time.
      let userInput = document.getElementById("mainInputBox").value;
      //TIME RESPONSE
      if (userInput.includes(" time")){
        
        currentTime();
        function currentTime() {
          let updatedTime = new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            //second: "numeric",
            hour12: true,
          });
          setResponse("the time is " + updatedTime);
          // *** this displays "the time is [object object]".
          
      
        };
       
      };
    },2600);
    
  };
  return {  timeResponseCallbackHandler };
};


export default useTimeResponseLogic;
