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
    setTimeout(function getGreetings(){
// greeting object
const greetings = {
  hello: "hello",
  hi: "hi",
  hey: "hey",
  goodMorning: "good morning",
  goodbye: "goodbye",
};
// greeting object END


      // if user does not type anything
      if (userInput === "" || userInput === " ") {
        setResponse("you didnt say anything");
      }
      // if user does not type anything END
      // if statements for GREETINGS Object
      if (userInput.includes(greetings.hello)) {
        setResponse("hello");
      }
      if (userInput.includes(greetings.hi)) {
        setResponse("hello there");
      }

      if (userInput.includes(greetings.hey)) {
        setResponse("hey there.");
      }
      if (userInput.includes(greetings.goodMorning)) {
        setResponse("Morning :)");
      }
      if (userInput.includes(greetings.goodbye)) {
        setResponse("Goodbye. See you later.");
      }
    }, 3000);
  };
  // end of fn1
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
