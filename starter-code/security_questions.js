console.log("security_questions.js loaded");

var securityQuestions = [
  {
    question: "What is your favorite animal?",
    expectedAnswer: "dog"
  },
  {
    question: "What is your favorite team?",
    expectedAnswer: "49ers"
  },
  {
    question: "What is your favorite sport?",
    expectedAnswer: "Football"
  }
]

var inputAnswer = "";

for (var i = 0; i < securityQuestions.length; i++){
  inputAnswer = prompt(securityQuestions[i].question)
    if (inputAnswer !== securityQuestions[i].expectedAnswer){
      alert("Wrong Answer!");
      break
    }
}
