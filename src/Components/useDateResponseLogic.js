// importing state from main logical component "useFn2Logic"
const useDateResponseLogic = (setResponse) => {
    // callback function to place function inside of fn1
    function dateResponseCallbackHandler() {
      getDateResponse();
      function getDateResponse() {
        // ***need to replace this with ref
        let userInput = document.getElementById("mainInputBox").value.toLowerCase();
        //TIME RESPONSE
        if (userInput.includes(" day") || userInput.includes(" date")) {
           

          currentDate();
          function currentDate() {
            let d = new Date(), //This is the current Date variable  
            months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
            console.log("timeresponse");
            setResponse(`Its ` + days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear());
          }
        }
        
      }
    }
  
    return { dateResponseCallbackHandler };
  };
  
  export default useDateResponseLogic;