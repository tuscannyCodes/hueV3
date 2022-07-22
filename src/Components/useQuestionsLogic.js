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
          "are you human",
          "going on",
          "you from",
          "how you doing",
          "what are you",
          "happy",
          "sad",
          "how are you",
        ],

        getQuestionResponse: function () {
          // these are for more specific questions
          if (userInput.includes(questions.theQuestions[0])) {
            setResponse("My name is Hue");
          }
          if (userInput.includes(questions.theQuestions[1])) {
            setResponse("Ive been in development for 3 years");
          }
          if (userInput.includes(questions.theQuestions[2])) {
            setResponse("Im being a robot!");
          }
          if (userInput.includes(questions.theQuestions[3])) {
            setResponse("Im Hugh.");
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
          if (userInput.includes(questions.theQuestions[7])) {
            setResponse("Im doing great");
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
          if (userInput.includes(questions.theQuestions[11])) {
            setResponse("Im doing great");
          }
        }, // getGreetResponse method END
      }; // greeting object END
      questions.getQuestionResponse();
    }
  }
  return { questionsCallbackHandler, response, setResponse };
};

export default useQuestionsLogic;
