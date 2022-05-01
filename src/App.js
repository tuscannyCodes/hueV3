import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton";
import { useState } from "react";

function App() {
  // this will be the main function that calls other functions.
 
  const [response, setResponse] = useState("this is a placeholder");

  const fn1=()=> {
    let userInput = document.getElementById("mainInputBox").value;
    console.log(userInput);

    if (userInput === "hi") {
      setResponse("hello there");
    }
  }


  
  return (
    <div className="App">
      <HueText response={response} />
      <InputBox />
      <MainButton fn1={fn1} setResponse={setResponse} />
    </div>
  );
}

export default App;
