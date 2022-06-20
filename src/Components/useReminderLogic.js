

// importing state from main logical component "useFn2Logic"
const useReminderLogic = (response, setResponse) => {
    // callback function to place function inside of fn2
    function reminderCallbackHandler() {
      reminderResponse();

      function reminderResponse() {
        let userInput = document.getElementById("mainInputBox").value;
        
//REMINDER SECTION START -----

        if(userInput.includes("remind me to ")){

            let reminderMode = true;
            let  reminderStr = userInput.value; 
    // userInput.value is not working in this situation. 
            let reminderCounter = 1;
            let reminderResponse = "";
        
            reminderResponse = reminderStr.substring(reminderStr.indexOf('to ') + 2); // save after 'remind me TO' to reminderStr 
    setResponse("did you want me to remind you to" + reminderResponse + "?");
   
    // change placeholder text to "yes" or "no" 
    // hueQuestionBox.innerHTML = `Type "yes" to confirm or "no" cancel reminder.`
     };
     
     if(userInput.includes("yes") && reminderMode===true){
        setResponse("Ok, when do you want me to remind you?");
        // change placeholder text to `Type a NUMBER and then "mins"`
        // hueQuestionBox.innerHTML = `Type a NUMBER and then "mins"`
      
        reminderCounter = 2;
        console.log("reminderSet")
    
    //setTimeout(function(){ hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + "."},3000)
        }
    if(inputBox.value.includes("no") && reminderMode===true){
            reminderMode = false;
            reminderCounter = 0;
            mainParagraph.textContent= "ok";
            hueQuestionBox.innerHTML = ``
            inputBox.value = "";
        console.log("reminder canceled")
            }
    //FOR MINUTES
    if(reminderCounter = 2 && inputBox.value.includes(" mins")){
        mainParagraph.textContent= `Ok, I'll remind you in ${inputBox.value}`;
        let numberValue = parseInt(inputBox.value, 10);
        hueQuestionBox.innerHTML = ``
        setTimeout(function(){hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + "."},numberValue * 60000)
        setTimeout(speak2, numberValue * 60000 + 10);
        reminderCounter = 0;
        inputBox.value = "";
        reminderMode = false;
    
    }
    //FOR HOURS
    if(reminderCounter = 2 && inputBox.value.includes(" hrs")){
        mainParagraph.textContent= `Ok, I'll remind you in ${inputBox.value}`;
        let numberValue = parseInt(inputBox.value, 10);
        hueQuestionBox.innerHTML = ``
        reminderCounter = 0;
        setTimeout(function(){ hueQuestionBox.innerHTML = `dont forget to ` + reminderResponse + ".";//still working on this.
    
        console.log("reminder is here")
      
      
    
    },numberValue * 3600000)
        inputBox.value = "";
    }








        };// colors object END

        colors.getColorsResponse();
    };  
         
        
      
    }
    return { reminderCallbackHandler, response, setResponse };

  
  export default useReminderLogic;
  