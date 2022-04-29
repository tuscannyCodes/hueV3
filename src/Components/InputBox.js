
import React, { useState, useRef } from "react";

function InputBox() {
  
  return (
    <>
      <div className="MainContainer">
        <div className="InputBox-container">
          <input
            type="text"
            id="mainInputBox"
            className="InputBox"
            placeholder="Say something"
          ></input>
        </div>
      </div>
    </>
  );
}

export default InputBox;
