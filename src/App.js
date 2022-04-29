import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton"
import { useState, Component } from "react";

function App() {

  const [response,setResponse] = useState ("this is a placeholder");
  return (
    <div className="App">
      <HueText response={response}/>
      <InputBox/>
      <MainButton setResponse={setResponse}/>
    </div>
  );
}

export default App;
