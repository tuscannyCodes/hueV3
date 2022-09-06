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

      // maybe test againt special case if user input is 'what ' and not included in the inputs object  
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
          "sup",
          "good afternoon" /* Greetings Responses END */,
          "your name" /* Questions Responses START */,
          "old are you",
          " doing",
          "who are you",
          "are you human",
          "going on",
          "you from",
          "how you doing",
          "what are you",
          "where are you",
          "happy",
          "sad",
          "soul",
          "are you alive",
          "how are you", /* Questions Responses END */,
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
          " favorite color",
        ],
        responses: [
          "Im not sure.",
          "I dont know.",
          "ok.",
          "Im not sure what that means.",
          "Sorry. I dont get it.",
          "???",
          "Im confused.",
          "sure."
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
