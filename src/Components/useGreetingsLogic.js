
import {useState} from 'react';

const useGreetingsLogic = () => {
    const [response, setResponse] = useState("");
    function responseCallbackHandler(){
  setTimeout(function getGreetings() {
    // greeting object
    let userInput = document.getElementById("mainInputBox").value;
    // use callback should be here
    // use custom hook
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
          };
        };
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
  }, 3000);
}
  return {responseCallbackHandler,response,setResponse};  
 };



export default useGreetingsLogic;