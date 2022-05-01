import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import { useState } from "react";

function App() {
  // state for responses
  const [response, setResponse] = useState("");

  // this will be the main function that calls other functions.

  const fn1 = () => {
    let userInput = document.getElementById("mainInputBox").value;

    // thinking animation

    function thinking() {
      setTimeout(() => {
        setResponse(".");
      }, 100);
      setTimeout(() => {
        setResponse("..");
      }, 800);
      setTimeout(() => {
        setResponse("...");
      }, 1600);
    }
    thinking();
    // thinking animation END
    // timer for after thinking animation
    // want to take this entire function and put it into a seperate component
    setTimeout(function getGreetings() {
      // greeting object
      const greetings = {
        greets: ["hello", "hi", "hey", "good morning", "goodbye","yo"],
        responses: ["hello","hello there","hey there", "hi"],
        getGreetResponse: function () {
          // if user does not type anything
          if (userInput === "" || userInput === " ") {
            setResponse("you didnt say anything");
          }  // if user does not type anything END
        
          // if statements for GREETINGS Object
          for (let i = 0; i < greetings.greets.length; i++) {
            if (userInput.includes(greetings.greets[i] )) {
              setResponse(greetings.responses[Math.floor(Math.random()*greetings.responses.length)]);
            }
        }// this loops over generic greetings and gives generic responses
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
  }; // end of fn1

  // this is rendering the components
  return (
    <div className="App">
      <HueText response={response} />
      <InputBox />
      <MainButton fn1={fn1} setResponse={setResponse} />
    </div>
  );
}

export default App;
