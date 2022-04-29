import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton"
import { useState, Component } from "react";
function App() {

  function fn1(){

    let userInput = document.getElementById('mainInputBox').value;
    console.log(userInput);
    setResponse(userInput);
    }
   
  

  const [response,setResponse] = useState ("this is a placeholder");
  return (
    <div className="App">
      <HueText response={response}/>
      <InputBox/>
      <MainButton fn1={fn1} setResponse={setResponse}/>
    </div>
  );
}

export default App;
