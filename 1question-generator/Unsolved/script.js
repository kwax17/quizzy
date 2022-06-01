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
// calls the function
renderQuestion();

// makes the button work
document
  // selects the html text 
 .querySelector("#change-question")
  // adds the event for a click 
 .addEventListener("click", function () {
    // when text is clicked, set var for next object in array
    questionIndex++;
    // call the question generator function
    renderQuestion();
 });