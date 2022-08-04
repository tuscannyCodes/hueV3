import React from "react";

function MainButton({ fn1, setResponse }) {
  // GLOBAL EVENTS START
  // *******************FUNNY FACE FUNCTION START**************************
  /* This is a function that makes a
 face when window is tripple clicked. 
 I will be placing global window and 
 document events in this section. */
  let TOUCH_TIMEOUT_MILLISECONDS = 500;
  let touch_count = 0;
  document.addEventListener("touchend", function (evt) {
    touch_count += 1;

    setTimeout(function () {
      touch_count = 0;
    }, TOUCH_TIMEOUT_MILLISECONDS);

    if (touch_count === 3) {
      setTimeout(() => {
        setResponse("●﹏●");
      }, 50);
    }

    setTimeout(() => {
      setResponse("._____.");
    }, 1500);
  });
  // *******************FUNNY FACE FUNCTION END**************************

  //'ENTER' Button event

  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      fn1();
    }
  });
  //'ENTER' Button event END
  // GLOBAL EVENTS END
  
  return (
    <div className="MainContainer">
      <div className="Button-container">
        <button onClick={fn1} className="MainButton"></button>
      </div>
    </div>
  );
}

export default MainButton;
