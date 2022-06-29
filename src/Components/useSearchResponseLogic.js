// need to try moving this up? 


// importing state from main logical component "useFn2Logic"
const useSearchResponseLogic = (response, setResponse) => {
  // callback function to place function inside of fn2
  function searchResponseCallbackHandler() {
    searchResponse();
    function searchResponse() {
      // ***need to replace this with ref
      let userInput = document.getElementById("mainInputBox").value;
      // search object
      const searchFunctionality = {
        input: [
          "hello" /* Greetings Responses START*/,
          "hi",
          "hey",
          "good morning",
          "goodbye",
          "yo",
          "howdy",
          "good afternoon" /* Greetings Responses END */,
          "your name" /* Questions Responses START */,
          "old are you",
          " doing",
          "who are you",
          "are you human",
          "going on" /* Questions Responses END */,
          "remind me to " /* Reminder Response */,
          "welcome" /* Thanks Responses START */,
          "you are welcome",
          "dont mention it",
          "no problem",
          "you're welcome" /* Thanks Responses END */,
          "time" /* Time Response END */,
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
        
        
        getSearchResponse: function () {
          // if user input does not have a programed response
          // debugger
          for (let keyword of searchFunctionality.input) {

            if (userInput.includes(!keyword)) {
              console.log(userInput.includes(!keyword)) /*This returns false when entering a keyword? */
              console.log(userInput.includes(keyword))
              setResponse("I dont understand this. Should I do a search for " + {userInput} + "?");
            } // if user input does not have a programed response END
          

          }
          
        }, // getSerchResponse method END
      }; // greeting object END
      searchFunctionality.getSearchResponse();
    }
  }
  return { searchResponseCallbackHandler, response, setResponse };
};

export default useSearchResponseLogic;
