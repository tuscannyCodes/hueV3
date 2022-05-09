// importing state from main logical component "useFn2Logic"
const useThanksLogic = (setResponse) => {
    // callback function to place function inside of fn2
    function ThanksCallbackHandler() {
      getThanks();
      function getThanks() {
        // ***need to replace this with ref
        let userInput = document.getElementById("mainInputBox").value;
        // greetings object
        const thanks = {
          TheThanks: ["thanks", "thank you"],
          responses: [
            "welcome",
            "you are welcome",
            "dont mention it",
            "no problem",
            "you're welcome",
          ],
          getThanksResponse: function () {
            // if statements for thanks Object
            // this loops over generic greetings and gives generic responses
            for (let i = 0; i < thanks.TheThanks.length; i++) {
              if (userInput.includes(thanks.TheThanks[i])) {
                setResponse(
                  thanks.responses[
                    Math.floor(Math.random() * thanks.responses.length)
                  ]
                );
              }
            }
          }, // getGreetResponse method END
        }; // greeting object END
        thanks.getThanksResponse();
      }
    }
    return { ThanksCallbackHandler,setResponse };
  };
  
  export default useThanksLogic;
  