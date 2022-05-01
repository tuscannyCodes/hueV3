const greetingsHandler = (userInput, setResponse) => {
    return ( setTimeout(function getGreetings() {
        // greeting object
        const greetings = {
          greets: ["hello", "hi", "hey", "good morning", "goodbye", "yo"],
          responses: ["hello", "hello there", "hey there", "hi", "whats up?"],
          getGreetResponse: function () {
            // if user does not type anything
            if (userInput === "" || userInput === " ") {
              setResponse("you didnt say anything");
            } // if user does not type anything END
  
            // if statements for GREETINGS Object
            // this loops over generic greetings and gives generic responses
            for (let i = 0; i < greetings.greets.length; i++) {
              if (userInput.includes(greetings.greets[i])) {
                setResponse(
                  greetings.responses[
                    Math.floor(Math.random() * greetings.responses.length)
                  ]
                );
              }
            }
            // these are for more specific greetings
            if (userInput.includes(greetings.greets[3])) {
              setResponse("Morning :)");
            }
            if (userInput.includes(greetings.greets[4])) {
              setResponse("Goodbye. See you later.");
            }
          }, // getGreetResponse method END
        }; // greeting object END
        greetings.getGreetResponse();
      }, 3000));
}
 
export default greetingsHandler;