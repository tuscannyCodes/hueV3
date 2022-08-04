//*/ GENERAL RESPONSE ALSO HAS DATE RESPONSE 
// importing state from main logical component "useFn2Logic"
const useGeneralTalkLogic = (response, setResponse) => {
  // callback function to place function inside of fn2
  function generalTalkCallbackHandler() {
    getGeneralTalk();
    function getGeneralTalk() {
      // ***need to replace this with ref
      let userInput = document
        .getElementById("mainInputBox")
        .value.toLowerCase();

        let d = new Date(), //This is the current Date variable
        months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        days = [
          "Sunday",
          "Monday",
          "Tueday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

      // general object
      const general = {
        talks: ["ok", "cool", "dope","kanye west"],


        
        getGeneralResponse: function () {
          if (userInput.includes(general.talks[0])) {
            setResponse("Ok.");
          }
          if (userInput.includes(general.talks[1])) {
            setResponse("SUPER cool.");
          }
          if (userInput.includes(general.talks[2])) {
            setResponse("dope.");
          }
          if (userInput.includes(general.talks[3])){
            setResponse("I love Kanye!");
          }

          if (userInput.includes(" date") || userInput.includes(" day")){

setResponse(`Its ` + days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+',' +' '+d.getFullYear())

          }
        }, // getGreetResponse method END
      }; // greeting object END
      general.getGeneralResponse();
    }
  }
  return { generalTalkCallbackHandler, response, setResponse };
};

export default useGeneralTalkLogic;
