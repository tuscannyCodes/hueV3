import React from "react";

function InputBox() {
  return (
    <>
      <div className="MainContainer">
        <div className="InputBox-container">
          <input 
            type="text"
            id="mainInputBox"
            className="InputBox border border-dark"
            placeholder="Say something"
          ></input>
        </div>
      </div>
    </>
  );
}

export default InputBox;
