import "./MainButton.css";
import React, {useState ,useRef } from "react";

function MainButton ({setResponse}){
  var i = 0;
  var txt = '...'; /* The text */
  var speed = 20; /* The speed/duration of the effect in milliseconds */
  


  // a function that prints out "..." when button is pressed

function fn1(){

  function typeWriter() {
    if (i < txt.length) {

      setResponse(txt.charAt(i)) 
      i++;
      setTimeout(typeWriter, speed);
     
    }
   
  }
  console.log(i)
  console.log("hello")
  typeWriter();
}


// state for the hue responses
  return (
    <div className="MainContainer">

        <div className="Button-container">
       <button onClick={fn1} className="MainButton">
            ...
          </button>
          </div>
    </div>
  );
};

export default MainButton;