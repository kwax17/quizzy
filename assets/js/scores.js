var goBackBtn = document.getElementById("go-back");
var clearScoresBtn = document.getElementById("clear");
var highScoreEl = document.getElementById("highscores");
var scoreListEl = document.getElementById("highscores");

function highScoreList() {
    // gets scores from local storagne
    var highscores = JSON.parse(window.localStorage.getItem("highscores"));

    // makes list elements and fills text with score/name
    highscores.forEach(function(score) {
        highScoreEl = document.createElement("li");
        highScoreEl.textContent = score.initials + " " + score.score;
        // show on page
        scoreListEl.append(highScoreEl);
    });
}

function clearScores() {
    // removes the stored high scores
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

highScoreList();

clearScoresBtn.addEventListener("click", clearScores);