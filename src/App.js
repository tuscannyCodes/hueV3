import HueText from "./Components/HueText";
import InputBox from "./Components/InputBox";
import MainButton from "./Components/MainButton"
import "./App.css";
import { useState, Component } from "react";

function App() {
  return (
    <div className="App">
      <HueText/>
      <InputBox/>
      <MainButton/>
    </div>
  );
}

export default App;
