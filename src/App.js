import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import useGreetingsLogic from "./Components/useGreetingsLogic";
import { useState } from "react";
// import GreetingsHandler from "./Components/GreetingsHandler";
function App() {
  const {responseCallbackHandler,response,setResponse}= useGreetingsLogic();
  
  // state for responses
  // const [response, setResponse] = useState("");

  // this will be the main function that calls other functions.
  
  const Fn1 = () => {
    // let userInput = document.getElementById("mainInputBox").value;

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
responseCallbackHandler();
  
    // <GreetingsHandler userInput={userInput} setResponse={setResponse}/>
    // thinking animation END
    // timer for after thinking animation
    // want to take this entire function and put it into a seperate component
    // setTimeout(function getGreetings() {
    //   // greeting object

    //   // use callback should be here
    //   // use constome hook
    //   const greetings = {
    //     greets: ["hello", "hi", "hey", "good morning", "goodbye", "yo"],
    //     responses: ["hello", "hello there", "hey there", "hi", "whats up?"],
    //     getGreetResponse: function () {
    //       // if user does not type anything
    //       if (userInput === "" || userInput === " ") {
    //         setResponse("you didnt say anything");
    //       } // if user does not type anything END

    //       // if statements for GREETINGS Object
    //       // this loops over generic greetings and gives generic responses
    //       for (let i = 0; i < greetings.greets.length; i++) {
    //         if (userInput.includes(greetings.greets[i])) {
    //           setResponse(
    //             greetings.responses[
    //               Math.floor(Math.random() * greetings.responses.length)
    //             ]
    //           );
    //         }
    //       }
    //       // these are for more specific greetings
    //       if (userInput.includes(greetings.greets[3])) {
    //         setResponse("Morning :)");
    //       }
    //       if (userInput.includes(greetings.greets[4])) {
    //         setResponse("Goodbye. See you later.");
    //       }
    //     }, // getGreetResponse method END
    //   }; // greeting object END
    //   greetings.getGreetResponse();
    // }, 3000);
  }; // end of fn1

  // this is rendering the components
  return (
    <div className="App">
      <HueText response={response} />
      <InputBox />
      <MainButton fn1={Fn1} setResponse={setResponse} />
    </div>
  );
}
/**
 * app
 *  response label 
 *  user form
 *  chatbot control
 *   
 * 
 * */





export default App;
