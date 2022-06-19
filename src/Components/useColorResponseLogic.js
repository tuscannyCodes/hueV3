// importing state from main logical component "useFn2Logic"
const useColorResponseLogic = (response, setResponse) => {
    // callback function to place function inside of fn2
    function colorResponseCallbackHandler() {
      colorResponse();

      function colorResponse() {
        let userInput = document.getElementById("mainInputBox").value;
        // colors object START
            const colors = {
            theColors :
         [
          " red",  
          " blue", 
          " purple", 
          " green", 
          " orange",
          " yellow",
          " pink",
          " grey",
           ],

          getColorsResponse: function () {
            // these are rsponses to user asking about colors
            if (userInput.includes(colors.theColors[0])) {
                document.body.style = 'background: firebrick !important;';
              setResponse("Its getting hot in here");
            }
            if (userInput.includes(colors.theColors[1])) {
              setResponse("Im feeling Blue.");
            }
            if (userInput.includes(colors.theColors[2])) {
                setResponse("Purple is for Royalty!");
              }
            if (userInput.includes(colors.theColors[3])) {
                setResponse("The grass IS greener!");
              }
            if (userInput.includes(colors.theColors[4])) {
                setResponse("Orange is my favorite color!");
              }
            if (userInput.includes(colors.theColors[5])) {
                setResponse("Yellow like a lemon!");
              }
            if (userInput.includes(colors.theColors[6])) {
                setResponse("Im feeling pretty!");
              }
              if (userInput.includes(colors.theColors[7])) {
                setResponse("Im getting old.");
              }
          }, // getGreetResponse method END

        };// colors object END

        colors.getColorsResponse();
    };  
         
        
      
    }
    return { colorResponseCallbackHandler, response, setResponse };
};
  
  export default useColorResponseLogic;
  