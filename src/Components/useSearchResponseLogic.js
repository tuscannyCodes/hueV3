

// need to try moving this up?

// importing state from main logical component "useFn2Logic"
const useSearchResponseLogic = (response, setResponse) => {
  // callback function to place function inside of fn2
  function searchResponseCallbackHandler() {
    searchResponse();
    function searchResponse() {
      // ***need to replace this with ref
      let userInput = document.getElementById("mainInputBox").value.toLowerCase();
      // search object
      let isPresent = false;
      const searchFunctionality = {
        input: [
          "hello" /* Greetings Responses START*/,
          "hi",
          "hey",
          "good morning",
          "goodbye",
          "yo",
          "howdy",
          "good afternoon", /* Greetings Responses END */
          "your name", /* Questions Responses START */
          "old are you",
          " doing",
          "who are you",
          "are you human",
          "you from",
          "going on", /* Questions Responses END */
          "remind me to ",/* Reminder Response START*/
          " mins", /* Reminder Response END */
          "thanks",  /* Thanks Responses START */
          "thank you",/* Thanks Responses END */
          "time", /* Time Response END */
          "red", /* color Responses start */
          "blue",
          "purple",
          "green",
          "orange",
          "yellow",
          "pink",
          "grey",
          "brown",
          "black",
          "white",/* color Responses END */
        ],

        getSearchResponse: function () {
          // if user input does not have a programed response
          // debugger

          for (let i = 0; i <= searchFunctionality.input.length; i++) {
            if (userInput.includes(searchFunctionality.input[i])) {
              console.log(searchFunctionality.input.length);
              isPresent = true;
            }
           }
            if (isPresent === false) {
              // console.log("idk")

              setResponse("idontknow");

              isPresent = false;
            }
          

          // for (let keyword of searchFunctionality.input) {

          //   if (userInput.includes(keyword.includes(userInput))) {
          //     console.log(userInput.includes(!keyword)) /*This returns false when entering a keyword? */
          //     console.log(userInput.includes(keyword))
          //     console.log(keyword)
          //     console.log(typeof(userInput))
          //     console.log(typeof(keyword))

          //   } // if user input does not have a programed response END

          // }
        }, // getSerchResponse method END
      }; // greeting object END
      searchFunctionality.getSearchResponse();
    }
  }
  return { searchResponseCallbackHandler, response, setResponse };
};

export default useSearchResponseLogic;
