var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

// starts the questions array at 0
var questionIndex = 0;
var correctCount = 0;

function renderQuestion() {
  // sets the text of html element #question to the question property in the object in the questions array
  questionEl.textContent = questions[questionIndex].question;

  // sets #option-list element to an empty string so choices erase before new question
  optionListEl.innerHTML = "";

  // gets the choices from the array of choices and starts at element 0
  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  // loop through each element starting at 0 and increasing by 1 until you reach the end of the choice array for each element
  for (var i = 0; i < choicesLength; i++) {
    // creates html list elements
    var questionListItem = document.createElement("li");
    // sets the text to strings in choices proprty
    questionListItem.textContent = choices[i];
    // adds it to the option list
    optionListEl.append(questionListItem);
  }
}

// next question function
function nextQuestion() {
  // sets var to 1 more than before (next object in array)
  questionIndex++;
  // calls the question generator function
  renderQuestion();
}

// checks the answer and responds accordinly depending on which child of option-list was clicked
function checkAnswer(event) {
  // makes sure a list item is clicked on 
  if (event.target.matches("li")) {
    var answer = event.target.textContent;

    // if the answer matches, display "correct" and increase count
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "correct";
      correctCount++;
    // if answer doesn't matchm display "incorrect"
    } else {
      questionResultEl.textContent = "incorrect";
    }
  }
  // callback function after 2000 milliseconds
  setTimeout(nextQuestion, 2000);
}

//add event listener to option-list and call checkAsnwer function
optionListEl.addEventListener("click", checkAnswer);

// calls the function
renderQuestion();