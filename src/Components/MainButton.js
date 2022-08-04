import React from "react";




function MainButton({ fn1, setResponse }) {
  
  document.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
       fn1()
    }
});

//   function handleKeyDown(e){
//     if(e.keyCode === 13) { 
//       fn1();
//         console.log('Enter key pressed')
//   }
// }
  // state for the hue responses
  return (
    <div className="MainContainer">
      <div className="Button-container">
        <button onClick={fn1} className="MainButton" >
          
         
        </button>
      </div>
    </div>
  );
}

export default MainButton;
