import { useState } from "react";
import useGreetingsLogic from "./useGreetingsLogic";
import useTimeResponseLogic from "./useTimeResponseLogic";
import useThanksLogic from "./useThanksLogic";
import useQuestionsLogic from "./useQuestionsLogic";
import useGeneralTalkLogic from "./useGeneralTalkLogic";
import useColorResponseLogic from "./useColorResponseLogic";
import useReminderLogic from "./useReminderLogic";
import useSearchResponseLogic from "./useSearchResponseLogic";

const useFn2Logic = () => {
  // This controls the state for the text being displayed
  let dynamicTime;
  // DISCARDED AUDIO*********
  // let audio = [new Audio('hughTalk1.mp3'),new Audio('hughTalk2.mp3'),new Audio('hughTalk3.mp3'),new Audio('hughTalk4.mp3')]
  // DISCARDED AUDIO*********
  // STATE
  const [response, setResponse] = useState(".__.");
  // STATE END
  const {questionsCallbackHandler} = useQuestionsLogic(response, setResponse,);
  const {ThanksCallbackHandler} = useThanksLogic(setResponse);
  const { timeResponseCallbackHandler } = useTimeResponseLogic(setResponse);
  const { responseCallbackHandler } = useGreetingsLogic(response,setResponse,);
  const { colorResponseCallbackHandler} = useColorResponseLogic(response, setResponse);
  const {generalTalkCallbackHandler} = useGeneralTalkLogic(response, setResponse);
  const { reminderCallbackHandler } = useReminderLogic(response, setResponse);
  const { searchResponseCallbackHandler} = useSearchResponseLogic(response, setResponse,responseCallbackHandler);
  
  // callback function to place function inside of fn1
  function fn2CallbackHandler() {
    function fn2() {
      let userInput = document.getElementById("mainInputBox").value;
      // Use this array to check possible entries for search functionality


        // *****this works instantly without dots.
      if (userInput.includes("time")) {
        console.log("timer");
        dynamicTime = setInterval(timeResponseCallbackHandler, 50);
        //*this set interval is not being cleared
      } else {
        // console.log(userInput);
        clearInterval(dynamicTime);
      }
     
     
      responseCallbackHandler();
      ThanksCallbackHandler();
      questionsCallbackHandler();
      colorResponseCallbackHandler();
      //*/ GENERAL RESPONSE ALSO HAS DATE RESPONSE 
      generalTalkCallbackHandler();
      reminderCallbackHandler()
      searchResponseCallbackHandler();
     
      
      
      
    };

    fn2();
  };
  return { fn2CallbackHandler, response, setResponse };
};

export default useFn2Logic;
