// importing state from main logical component "useFn2Logic"
const useReminderLogic = (response, setResponse) => {
  // callback function to place function inside of fn2
  function reminderCallbackHandler() {
    reminderResponse();

    function reminderResponse() {
      let userInput = document.getElementById("mainInputBox").value;
      let reminderMode = false;
      let reminderCounter = 1;
      let thingToRemember = "";
      let reminderStr = userInput;
      //REMINDER SECTION START -----

      if (userInput.includes("remind me to ")) {
        reminderMode = true;
        console.log(reminderMode);
        reminderCounter = 2;
        // userInput.value is not working in this situation.

        thingToRemember = userInput.substring(userInput.indexOf("to ") + 2);
        // save after 'remind me TO' to reminderStr
        setResponse("Sure, When?");
console.log(thingToRemember);
        // change placeholder text to "yes" or "no"
        // hueQuestionBox.innerHTML = `Type "yes" to confirm or "no" cancel reminder.`
      }

      // if (userInput.includes("yes") /*&& { reminderMode }*/) {
      //   setResponse("When?");
      //   // change placeholder text to `Type a NUMBER and then "mins"`

      //   // hueQuestionBox.innerHTML = `Type a NUMBER and then "mins"`

      //   reminderCounter = 2;
      //   console.log("reminderSet" + thingToRemember);
      // }
      // if (userInput.includes("no") /*&& { reminderMode }*/) {
      //   reminderMode = false;
      //   reminderCounter = 0;
      //   setResponse("Ok");
      //   console.log("reminder canceled");
      // }
      //FOR MINUTES
      if (reminderCounter = 2 && userInput.includes(" mins")) {
        setResponse(`Ok, I'll remind you in ${userInput}`);
        let numberValue = parseInt(userInput, 10);
        setTimeout(function () {
          setResponse("dont forget to do that thing.");
        }, numberValue * 60000);
        reminderCounter = 0;
        reminderMode = false;
        console.log(thingToRemember)
      }
    }
  }
  return { reminderCallbackHandler, response, setResponse };
};

export default useReminderLogic;

// /////////
// this is not fully working. function is not working with reminderMode variable
// and triggers when 'yes' is entered initially, even if before reminder is asked.
// also need to figure out placeholder text to prompt user correct imputs.
