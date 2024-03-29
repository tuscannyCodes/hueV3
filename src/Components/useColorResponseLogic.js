// importing state from main logical component "useFn2Logic"
const useColorResponseLogic = (response, setResponse) => {
  // callback function to place function inside of fn2
  function colorResponseCallbackHandler() {
    colorResponse();

    function colorResponse() {
      let userInput = document
        .getElementById("mainInputBox")
        .value.toLowerCase();
      // colors object START
      const colors = {
        theColors: [
          "red",
          "blue",
          "purple",
          "green",
          "orange",
          "yellow",
          "pink",
          "grey",
          "brown",
          "black",
          "white",
        ],

        // specs: [
        //   { query: 'red', background: 'firebrick', response: ''},
        //   { query: 'blue', background: 'cadetblue'},
        // ],

        getColorsResponse: function () {
          // these are rsponses to user asking about colors

          // for (const spec of colors.specs) {
          //   if (userInput.includes(spec.query)){
          //     document.body.style = 'background: ' + spec.background + ' !important;';

          //   }
          // }
          // Add multiple color responses.
          if (userInput.includes(colors.theColors[0])) {
            let responses = [
              "Red is great.",
              "Heating up",
              "Wine is red.",
            ];
            setResponse(
              responses[Math.floor(Math.random() * responses.length)]
            );
            document.body.style = "background: firebrick !important;";
          }
          if (userInput.includes(colors.theColors[1])) {
            document.body.style = "background: cadetblue !important;";
            setResponse("Like water.");
          }
          if (userInput.includes(colors.theColors[2])) {
            document.body.style = "background: mediumpurple !important;";
            setResponse("._____.");
          }
          if (userInput.includes(colors.theColors[3])) {
            document.body.style = "background: darkolivegreen !important;";
            setResponse("The grass IS greener!");
          }
          if (userInput.includes(colors.theColors[4])) {
            document.body.style = "background: orange !important;";
            setResponse("My favorite color!");
          }
          if (userInput.includes(colors.theColors[5])) {
            document.body.style = "background: gold !important;";
            setResponse("._____.");
          }
          if (userInput.includes(colors.theColors[6])) {
            document.body.style = "background: lightpink !important;";
            setResponse("._____.");
          }
          if (userInput.includes(colors.theColors[7])) {
            document.body.style = "background: lightgrey !important;";
            setResponse("Im getting old.");
          }
          if (userInput.includes(colors.theColors[8])) {
            document.body.style = "background: sienna !important;";
            let responses = [
              "Chocolate :P",
              "Brown is great!",
              "this feels nice.",
            ];
            setResponse(
              responses[Math.floor(Math.random() * responses.length)]
            );
          }
          if (userInput.includes(colors.theColors[9])) {
            document.body.style = "background: #262626 !important;";
            setResponse("Dark");
          }
          if (userInput === ("white")) {
            document.body.style = "background: floralwhite !important;";
            console.log(userInput);
            setResponse("blank.");
          }
        }, // getColorResponse method END
      }; // colors object END

      colors.getColorsResponse();
    }
  }
  return { colorResponseCallbackHandler, response, setResponse };
};

export default useColorResponseLogic;
