import React from "react";

function HueText({ response }) {
  console.log("hueText");
  // state for the hue responses
  return (
    <div className="MainContainer">
      <div className="HueText-container">
        <h1 className="HueText">{response}</h1>
      </div>
    </div>
  );
}

export default HueText;
