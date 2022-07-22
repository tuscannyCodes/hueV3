// need to try moving this up?

// importing state from main logical component "useFn2Logic"
const useSearchResponseLogic = (response, setResponse, responseCallbackHandler) => {
  // callback function to place function inside of fn2
  function searchResponseCallbackHandler() {
    searchResponse();
    function searchResponse() {
      // ***need to replace this with ref
      let userInput = document
        .getElementById("mainInputBox")
        .value.toLowerCase();
      // search object
      let isPresent = false;
      const searchFunctionality = {
        input: [
          "hello" /* Greetings Responses START*/,
          "hi",
          "hey",
          "good morning",
          "goodbye",
          // "yo",
          "howdy",
          "good afternoon" /* Greetings Responses END */,
          "your name" /* Questions Responses START */,
          "old are you",
          " doing",
          "who are you",
          "are you human",
          "you from",
          "happy",
          "sad",
          "going on" ,
          "how are you" /* Questions Responses END */,
          "remind me to " /* Reminder Response START*/,
          " mins" /* Reminder Response END */,
          "thanks" /* Thanks Responses START */,
          "thank you" /* Thanks Responses END */,
          "time"/* Time Response START */, 
          "day",
          "date" /* Time Response END */,
          "red" /* color Responses start */,
          "blue",
          "purple",
          "green",
          "orange",
          "yellow",
          "pink",
          "grey",
          "brown",
          "black",
          "white" /* color Responses END */,
          "ok" /* general Responses START */, 
          "cool", 
          "dope",
          "kanye west" /* general Responses END */,
        ],
        responses: [
          "I dont understand this.",
          "??????",
          "Can not compute.",
          "My programmer has not given me a response to that.",
          "Im not sure what that means.",
          "Sorry. I dont get it.",
          "???",
          "Confused."
          
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

            setResponse(searchFunctionality.responses[Math.floor(Math.random() * searchFunctionality.responses.length)]);

            isPresent = false;
          }
          // this is to also check if user didnt say anything but not 'includes':  "" or " ".
          if(userInput === "" || " ") {

            responseCallbackHandler();
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
