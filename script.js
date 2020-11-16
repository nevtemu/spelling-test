import {questions} from "./questions"

let totalyAnswered = 0;
let correct = 0;
let question;
let answer;
const previousQuestions = [,,,,,];

const talk = () => {
    let voice = new SpeechSynthesisUtterance(question);
    window.speechSynthesis.speak(voice);
}
const checkAnswer = () => {
  if (document.getElementById("answer").value){//is there an answer?
      answer = document.getElementById("answer").value;
      if (answer == question) {//correct answer
          correct++;
          document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden")    
          document.getElementsByClassName("fa-thumbs-up")[0].style.color = "green"
          document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")
      } else { //wrong answer
          document.getElementById("textMistakes").innerHTML+=question + " ";
          document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden") 
          document.getElementsByClassName("fa-thumbs-up")[0].style.color = "red"
          document.getElementsByClassName("fa-thumbs-up")[0].classList.add("fa-flip-vertical") 
          document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")    
      }
      totalyAnswered++; //this is answers statistics
      document.getElementById("totalyAnswered").innerHTML = "Answered questions: " + totalyAnswered;
      document.getElementById("corectAnswers").innerHTML = "Correct answers: " + Math.floor((correct / totalyAnswered) * 100) + "%";
    }
}
const askQuestion =()=> {
    document.getElementsByClassName("fa-thumbs-up")[0].classList.toggle("hidden")
    document.getElementsByClassName("fa-thumbs-up")[0].classList.remove("fa-flip-vertical") 
    document.getElementsByClassName("fa-check-square")[0].classList.toggle("hidden")   
    document.getElementById("answer").value = "";
    let n // index of question in questions array
    do {n = getRandomNumber(0, questions.length); //to perform this task at least once
        question = questions[n][0];} 
    while (previousQuestions.includes(question))
    document.getElementById("hint").innerHTML = questions[n][1]; //display hint
    previousQuestions.push(question); //track previous questions to avoid reapeted questions
    previousQuestions.shift();
}
const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min+1))+min;
askQuestion();