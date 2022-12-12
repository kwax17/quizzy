var questions = [
  {
    question: "How long is an Olympic swimming pool?",
    choices: ["10 meters", "50 meters", "100 meters", "75 meters"],
    answer: "50 meters",
  },
  {
    question:
      "Who was the first woman to win a Nobel Prize?",
    choices: ["Florence Nightingale", "Maya Angelou", "Marie Curie", "Ada Lovelace"],
    answer: "Marie Curie",
  },
  {
    question: "What is the joule a unit of?",
    choices: [
      "diamond clarity", "speed", "light", "energy"
    ],
    answer: "energy",
  },
  {
    question:
      "What is a single strand of spaghetti called?",
    choices: ["hair", "spaghetto", "string", "noodle"],
    answer: "spaghetto",
  },
  {
    question:
      "What is the best-selling Christmas single of all time?",
    choices: ["'White Christmas' Bing Cosby", "'All I Want for Christmas' Mariah Carey", "'Last Christmas' Wham!" , "'Rockin' Around the Christmas Tree' Brenda Lee" ],
    answer: "'White Christmas' Bing Cosby",
  },
  {
    question:
      "What year did MTV launch?",
    choices: ["1990", "1987", "1978", "1981"],
    answer: "1981",
  },
  {
    question:
      "By U.S. law, exit signs must be one of what two colors?",
    choices: ["green/red", "blue/green", "red/blue", "yellow/green"],
    answer: "green/red",
  },
  {
    question:
      "Where did the 2000 Summer Olympics take place?",
    choices: ["London, England", "Paris, France", "Athens, Greece", "Sydney, Australia"],
    answer: "Sydney, Australia",
  },
  {
    question:
      "Who was the first American woman in space?",
    choices: ["Sally Ride", "Samantha Good", "Barbara Leahy", "Cate Weston"],
    answer: "Sally Ride",
  },
  {
    question:
      "What was the first state?",
    choices: ["Massachusetts", "Maine", "Delaware", "Virginia"],
    answer: "Delaware",
  },
  {
    question:
      "How many legs does a lobster have?",
    choices: ["8", "10", "4", "6"],
    answer: "10",
  },
  {
    question:
      "Which mammal is known to have the most powerful bite in the world?",
    choices: ["alligator", "hippo", "lion", "tiger"],
    answer: "hippo",
  }
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#start");
var startScreenEl = document.querySelector("#start-screen");
var saveScoreBtn = document.querySelector("#submit");
var finalScoreEl = document.getElementById("final-score");
var highScoreEl = document.getElementById("highscores");
var initialsEl = document.getElementById("initials");

// starts the questions array at 0
var questionIndex = 0;
var correctCount = 0;

// variables to hold the time and intervaliD for the timer
var time = 60;
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
    endQuiz();
  }

  // calls the question generator function
  renderQuestion();
}

// checks the answer and responds accordinly depending on which child of option-list was clicked
function checkAnswer(event) {

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
      // if answer is wrong, subtract 5 seconds from timer
      time = time - 5;
      timerEl.textContent = time;
      return;
    }
  }
}

// ends the quiz annd clears the timer
function endQuiz() {
  // clear Interval and wont call back function anymore
  clearInterval(timerId);

  questionEl.setAttribute("class", "hide");
  optionListEl.setAttribute("class", "hide");
  questionResultEl.setAttribute("class", "hide");

  // tells user score
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  // show final score
  finalScoreEl.textContent = correctCount;
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

function saveScore() {
  // get the person's name
  var initials = initialsEl.value.trim();
  // gets svaed high scores from localStorage
  var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
  // new score for new user 
  var newScore = { 
    score: correctCount, 
    initials 
  };

  // pushes and sets new score in localStorage
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  // redirect to next page
  window.location.href = "scores.html";
}


// start quiz
startBtnEl.addEventListener("click", startQuiz);

//add event listener to option-list and call checkAsnwer function
optionListEl.addEventListener("click", checkAnswer);

// submit and save score
saveScoreBtn.addEventListener("click", saveScore);
