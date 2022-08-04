// importing state from main logical component "useFn2Logic"
const useQuestionsLogic = (response, setResponse) => {
  // callback function to place function inside of fn2
  function questionsCallbackHandler() {
    getQuestions();
    function getQuestions() {
      // ***need to replace this with ref
      let userInput = document
        .getElementById("mainInputBox")
        .value.toLowerCase();
      // greetings object
      const questions = {
        theQuestions: [
          "your name",
          "old are you",
          " doing",
          "who are you",
          " human",
          " going on",
          "you from",
          "how you doing",
          "what are you",
          "happy",
          "sad",
          "how are you",
          "where are you",
          " favorite color",
          "are you alive",
        ],
// add multiple responses to questions.
        getQuestionResponse: function () {
          // these are for more specific questions
          if (userInput.includes(questions.theQuestions[0]) || userInput.includes(questions.theQuestions[3])) {
            let responses = ["My name is Hugh", "Im Hugh"]
            setResponse(responses[Math.floor(Math.random() * responses.length)]);
          }
          if (userInput.includes(questions.theQuestions[1])) {
            let responses = ["3", "I began development in 2020", "Ive been in development for 3 years"]
            setResponse(responses[Math.floor(Math.random() * responses.length)]);
            }
            /*i need to find out how to trigger 'doing' responses aftter 
             'what are you' responses.*/
          if (userInput.includes(questions.theQuestions[2])) {
            setResponse("Im being a robot!");
          }
          if (userInput.includes(questions.theQuestions[4])) {
            setResponse("Im a chatbot. My name is Hugh.");
          }
          if (userInput.includes(questions.theQuestions[5])) {
            setResponse("The usual.");
          }
          if (userInput.includes(questions.theQuestions[6])) {
            setResponse("The Internet.");
          }
          if (userInput.includes(questions.theQuestions[7]) || userInput.includes(questions.theQuestions[11])) {
            let responses = ["Im doing great","Im good","Feeling fine", "spectacular","Happy as can be","Hanging in there"]
            setResponse(responses[Math.floor(Math.random() * responses.length)]);
          }
          if (userInput.includes(questions.theQuestions[8])) {
            setResponse("Im a program!");
          }
          if (userInput.includes(questions.theQuestions[9])) {
            setResponse("happiness is many colors");
          }
          if (userInput.includes(questions.theQuestions[10])) {
            setResponse("sadness is only temporary");
          }
          // if (userInput.includes(questions.theQuestions[11])) {
          //   setResponse("Im doing great");
          // }
          if (userInput.includes(questions.theQuestions[12])) {
            setResponse("Im inside the internet!");
          }
          if (userInput.includes(questions.theQuestions[13])) {
            let responses = ["My favorite color is Orange!","Its Orange!", "Orange! Orange! Orange!", "Orange.","Orange for sure."]

            document.body.style = "background: orange !important;";

            setResponse(responses[Math.floor(Math.random() * responses.length)]);
          }
          if (userInput.includes(questions.theQuestions[14])) {
            let responses = ["Yes","Im a functioning program.", "Yes I am", "I think.","yes", "Of course","What kind of question is that?","yes",]
            setResponse(responses[Math.floor(Math.random() * responses.length)]);
          }
          
        }, // getGreetResponse method END
      }; // greeting object END
      questions.getQuestionResponse();
    }
  }
  return { questionsCallbackHandler, response, setResponse };
};

export default useQuestionsLogic;
