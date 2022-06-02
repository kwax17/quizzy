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
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  }
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#start");
var startScreenEl = document.querySelector("#start-screen");

// starts the questions array at 0
var questionIndex = 0;
var correctCount = 0;

// variables to hold the time and intervaliD for the timer
var time = 20;
var timerId;

// start quiz function
function startQuiz() {
  // hides the start screen
  startScreenEl.setAttribute("class", "hide");
  // displays the question and answer options
  questionEl.removeAttribute("class");
  optionListEl.removeAttribute("class");
  // starts timer
  timerId = setInterval(updateTime, 1000);
  timerEl.textContent = time;
  // calls the function to make question
  renderQuestion();
}

function renderQuestion() {
  // check if time is 0 and if so end game
  if (time == 0) {
    endQuiz();
    return;
  }
  
  // sets the text of html element #question to the question property in the object in the questions array
  questionEl.textContent = questions[questionIndex].question;

  // sets #option-list element to an empty string so choices erase before new question
  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  // gets the choices from the array of choices and starts at element 0
  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  // loop through each element starting at 0 and increasing by 1 until you reach the end of the choice array for each element
  for (var i = 0; i < choicesLength; i++) {
    // creates html list elements
    var questionListItem = document.createElement("button");
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
  // if the arrays runs out of questions, treat it like time = 0 (end game)
  if (questionIndex === questions.length) {
    time = 0;
  }

  // calls the question generator function
  renderQuestion();
}

// checks the answer and responds accordinly depending on which child of option-list was clicked
function checkAnswer(event) {
  // pause timer
  clearInterval(timerId);

  // makes sure a list item is clicked on 
  if (event.target.matches("button")) {
    var answer = event.target.textContent;

    // if the answer matches, display "correct" and increase count
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "correct";
      correctCount++;
      nextQuestion();
    // if answer doesn't matchm display "incorrect"
    } else {
      questionResultEl.textContent = "incorrect";
      // if answer is wrong, subtract 2 seconds from timer
      time = time - 2;
      timerEl.textContent = time;
      // callback function after 2000 milliseconds
      setTimeout(nextQuestion, 7000);
    }
  }

}

// ends the quiz annd clears the timer
function endQuiz() {
  // clear Interval and wont call back function anymore
  clearInterval(timerId);
  // update DOM to indicate game is over
  var body = document.body;
  // tells user score
  body.innerHTML = "Game Over! Your Score is " + correctCount;
}

// updates the counter
function updateTime() {
  //decrement time
  time--;
  timerEl.textContent = time;
  //if time is = 0 end quiz
  if (time <= 0) {
    endQuiz();
  }
}

startBtnEl.addEventListener("click", startQuiz);

//add event listener to option-list and call checkAsnwer function
optionListEl.addEventListener("click", checkAnswer);
