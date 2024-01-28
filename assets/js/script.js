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
    choices: ["'White Christmas' Bing Cosby", "'All I Want for Christmas' Mariah Carey", "'Last Christmas' Wham!", "'Rockin' Around the Christmas Tree' Brenda Lee"],
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
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Jupiter", "Mars", "Venus", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Which country is the largest by land area?",
    choices: ["Russia", "China", "USA", "Canada"],
    answer: "Russia"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which bird is known for its ability to mimic human speech?",
    choices: ["Parrot", "Penguin", "Eagle", "Owl"],
    answer: "Parrot"
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au"
  },
  {
    question: "Which is the largest mammal in the world?",
    choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest"
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    answer: "Nitrogen"
  },
  {
    question: "What is the chemical symbol for iron?",
    choices: ["Ir", "Fe", "In", "Au"],
    answer: "Fe"
  },
  {
    question: "In what year did the Titanic sink?",
    choices: ["1912", "1915", "1920", "1905"],
    answer: "1912"
  },
  {
    question: "Which element is the most abundant in the Earth's crust?",
    choices: ["Oxygen", "Silicon", "Iron", "Aluminum"],
    answer: "Oxygen"
  },
  {
    question: "Who discovered penicillin?",
    choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"],
    answer: "Alexander Fleming"
  },
  {
    question: "What is the largest organ in the human body?",
    choices: ["Brain", "Skin", "Liver", "Heart"],
    answer: "Skin"
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    choices: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Venus"
  },
  {
    question: "What is the chemical symbol for silver?",
    choices: ["Si", "Sr", "Au", "Ag"],
    answer: "Ag"
  },
  {
    question: "Who was the first person to step on the moon?",
    choices: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
    answer: "Neil Armstrong"
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    answer: "Tokyo"
  },
  {
    question: "Which animal can sleep up to 22 hours a day?",
    choices: ["Lion", "Koala", "Giraffe", "Sloth"],
    answer: "Sloth"
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    choices: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    answer: "Michelangelo"
  },
  {
    question: "What is the chemical symbol for carbon?",
    choices: ["Co", "Ca", "C", "Cr"],
    answer: "C"
  },
  {
    question: "What is the longest river in the world?",
    choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Who developed the theory of relativity?",
    choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answer: "Albert Einstein"
  },
  {
    question: "What is the chemical symbol for sodium?",
    choices: ["Sn", "So", "Na", "Nb"],
    answer: "Na"
  },
  {
    question: "Which city is known as the 'City of Love'?",
    choices: ["Rome", "Paris", "Venice", "Prague"],
    answer: "Paris"
  },
  {
    question: "Who is known as the 'Father of Modern Physics'?",
    choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
    answer: "Albert Einstein"
  },
  {
    question: "What is the chemical symbol for potassium?",
    choices: ["P", "K", "Ka", "Po"],
    answer: "K"
  },
  {
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["Harper Lee", "John Steinbeck", "F. Scott Fitzgerald", "Mark Twain"],
    answer: "Harper Lee"
  },
  {
    question: "What is the chemical symbol for helium?",
    choices: ["H", "He", "Ho", "Hu"],
    answer: "He"
  },
  {
    question: "Which is the largest desert in the world?",
    choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
    answer: "Antarctic Desert"
  },
  {
    question: "What is the main ingredient in guacamole?",
    choices: ["Avocado", "Tomato", "Onion", "Lemon"],
    answer: "Avocado"
  },
  {
    question: "Who wrote '1984'?",
    choices: ["George Orwell", "Ray Bradbury", "Aldous Huxley", "J.R.R. Tolkien"],
    answer: "George Orwell"
  },
  {
    question: "What is the chemical symbol for lead?",
    choices: ["Ld", "Le", "Pb", "Pl"],
    answer: "Pb"
  },
  {
    question: "What is the smallest bone in the human body?",
    choices: ["Stapes", "Femur", "Tibia", "Fibula"],
    answer: "Stapes"
  },
  {
    question: "Who is credited with discovering America?",
    choices: ["Christopher Columbus", "Vasco da Gama", "Amerigo Vespucci", "Juan Ponce de León"],
    answer: "Christopher Columbus"
  },
  {
    question: "What is the chemical symbol for tin?",
    choices: ["Ti", "Tn", "T", "Sn"],
    answer: "Sn"
  },
  {
    question: "Which is the longest bone in the human body?",
    choices: ["Femur", "Tibia", "Fibula", "Radius"],
    answer: "Femur"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "John Steinbeck"],
    answer: "F. Scott Fitzgerald"
  },
  {
    question: "What is the chemical symbol for calcium?",
    choices: ["Co", "Ca", "Ce", "Cm"],
    answer: "Ca"
  },
  {
    question: "What is the largest internal organ in the human body?",
    choices: ["Liver", "Heart", "Lungs", "Stomach"],
    answer: "Liver"
  },
  {
    question: "Who painted 'The Starry Night'?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Vincent van Gogh"
  },
  {
    question: "What is the chemical symbol for mercury?",
    choices: ["Hg", "Me", "Hy", "Mr"],
    answer: "Hg"
  },
  {
    question: "Which is the hardest natural substance on Earth?",
    choices: ["Gold", "Diamond", "Platinum", "Graphite"],
    answer: "Diamond"
  },
  {
    question: "What is the chemical symbol for uranium?",
    choices: ["U", "Un", "Ur", "Ul"],
    answer: "U"
  },
  {
    question: "Who composed 'Symphony No. 9'?",
    choices: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
    answer: "Ludwig van Beethoven"
  },
  {
    question: "What is the chemical symbol for nitrogen?",
    choices: ["Ni", "Ng", "Nt", "N"],
    answer: "N"
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Jacinda Ardern"],
    answer: "Margaret Thatcher"
  },
  {
    question: "What is the chemical symbol for phosphorus?",
    choices: ["Po", "P", "Ph", "Pa"],
    answer: "P"
  },
  {
    question: "Who painted 'The Last Supper'?",
    choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Titian"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the chemical symbol for radium?",
    choices: ["Rd", "Ra", "R", "Rm"],
    answer: "Ra"
  },
  {
    question: "What is the hardest natural substance produced in the human body?",
    choices: ["Enamel", "Bone", "Cartilage", "Tooth"],
    answer: "Enamel"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    choices: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Louisa May Alcott"],
    answer: "Jane Austen"
  },
  {
    question: "What is the chemical symbol for silicon?",
    choices: ["Si", "Sl", "S", "So"],
    answer: "Si"
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Gerty Cori"],
    answer: "Marie Curie"
  },
  {
    question: "What is the chemical symbol for argon?",
    choices: ["Ag", "Ar", "Ao", "An"],
    answer: "Ar"
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

// Randomly shuffle the questions array
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function renderQuestion() {
  // Shuffle questions before rendering
  shuffleQuestions();

  // Rest of the function remains the same
  if (time == 0) {
    endQuiz();
    return;
  }

  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("button");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}


// function renderQuestion() {
//   // check if time is 0 and if so end game
//   if (time == 0) {
//     endQuiz();
//     return;
//   }

//   // sets the text of html element #question to the question property in the object in the questions array
//   questionEl.textContent = questions[questionIndex].question;

//   // sets #option-list element to an empty string so choices erase before new question
//   optionListEl.innerHTML = "";
//   questionResultEl.innerHTML = "";

//   // gets the choices from the array of choices and starts at element 0
//   var choices = questions[questionIndex].choices;
//   var choicesLength = choices.length;

//   // loop through each element starting at 0 and increasing by 1 until you reach the end of the choice array for each element
//   for (var i = 0; i < choicesLength; i++) {
//     // creates html list elements
//     var questionListItem = document.createElement("button");
//     // sets the text to strings in choices proprty
//     questionListItem.textContent = choices[i];
//     // adds it to the option list
//     optionListEl.append(questionListItem);

//   }
// }

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
