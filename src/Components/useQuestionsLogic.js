// importing state from main logical component "useFn2Logic"
const useQuestionsLogic = (response, setResponse) => {
    // callback function to place function inside of fn2
    function questionsCallbackHandler() {
      getQuestions();
      function getQuestions() {
        // ***need to replace this with ref
        let userInput = document.getElementById("mainInputBox").value;
        // greetings object
        const questions = {
          theQuestions: [
        " your name",  
          " old are you", 
          ],
          
          getQuestionResponse: function () {
            // these are for more specific questions
            if (userInput.includes(questions.theQuestions[0])) {
              setResponse("My name is Hue");
            }
            if (userInput.includes(questions.theQuestions[1])) {
              setResponse("Ive been in development for 3 years");
            }
          }, // getGreetResponse method END
        }; // greeting object END
        questions.getQuestionResponse();
      }
    }
    return { questionsCallbackHandler, response, setResponse };
  };
  
  export default useQuestionsLogic;
  