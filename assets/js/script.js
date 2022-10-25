var questions = [
    "Commonly used data types do NOT include _____. ",
    "The condition in an if/else statement is enclosed with ______. ",
    "Arrays in JavaScript can be used to store _____. ",
    "String values must be enclosed with _____ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is _____."
];

var answerKey = [
    3,
    3,
    4,
    3,
    4
];

var answers = [
    ["strings", "booleans", "alerts", "numbers"],
    ["quotes", "curly brackets", "parenthesis", "square brackets"],
    ["numbers and strings", "other arrays", "booleans", "all of the above"],
    ["commas", "curly brackets", "quotes", "square brackets"],
    ["JavaScript", "terminal/bash", "for loops", "console.log"]
];

var mainContent = document.querySelector(".main-content");

/* --------------- init ------------------------ */
var secondsLeft;
var gameOver;
var questionNum;
var myScore;
var time = document.querySelector(".time");
var initDiv = document.createElement("div");
var mainHeading = document.createElement("h1");
var description = document.createElement("p");
var startButton = document.createElement("button");

var highScores = [];
var names = [];

function init() {
    secondsLeft = 60;
    myScore = secondsLeft;
    gameOver = true;
    questionNum = 0;
    time.textContent = "Time: " + secondsLeft;

    // retrieve stored scores
    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores !== null) {
        highScores = storedScores;
        names = JSON.parse(localStorage.getItem("names"));
    }

    // generate first page
    mainContent.appendChild(initDiv);
    initDiv.appendChild(mainHeading);
    initDiv.appendChild(description);
    initDiv.appendChild(startButton);

    mainHeading.textContent = "Coding Quiz Challenge";
    description.textContent = 
    "Try to answer the following code-related questions within the time limit. " +
    "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    startButton.textContent = "Start";
}

init();

/* --------------- setTime ------------------------ */
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        

        if (gameOver) {
            clearInterval(timerInterval);
        }
        else if (secondsLeft <= 0) {
            time.textContent = "Time: 0";
            clearInterval(timerInterval);
            endGame();
        }
        else {
            time.textContent = "Time: " + secondsLeft;
        }

    }, 1000);
}

/* --------------- Start Button ------------------------ */
var gameStartDiv = document.createElement("div");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var result = document.createElement("p");

gameStartDiv.setAttribute("class", "game-start-div");
result.setAttribute("id", "result");

button1.setAttribute("class", "answer-button");
button2.setAttribute("class", "answer-button");
button3.setAttribute("class", "answer-button");
button4.setAttribute("class", "answer-button");

startButton.addEventListener("click", function() {
    // start game and clear page
    gameOver = false;
    result.textContent = "";
    clearDivs();

    // generate question 1 and multiple choice buttons
    mainContent.appendChild(gameStartDiv);
    gameStartDiv.appendChild(mainHeading);
    gameStartDiv.appendChild(button1);
    gameStartDiv.appendChild(button2);
    gameStartDiv.appendChild(button3);
    gameStartDiv.appendChild(button4);
    gameStartDiv.appendChild(result);

    // present first question
    mainHeading.textContent = questions[questionNum];
    button1.textContent = answers[questionNum][0];
    button2.textContent = answers[questionNum][1];
    button3.textContent = answers[questionNum][2];
    button4.textContent = answers[questionNum][3];

    // start timer
    setTime();
});

/* --------------- Button 1 ------------------------ */
button1.addEventListener("click", function() {
    // if button 1 is correct, state answer is correct
    if (answerKey[questionNum] === 1) {
        result.textContent = "Correct!";
    }
    // if answer is not 1, state wrong answer, deduct time
    else {
        result.textContent = "Wrong!";
        secondsLeft -= 5;
    }

    // update question number
    questionNum++;

    // check if end of game
    // if end of game, go to endGame()
    if (questionNum == questions.length) {
        gameOver = true;
        endGame();
    }
    // else, present next question
    else {
        mainHeading.textContent = questions[questionNum];
        button1.textContent = answers[questionNum][0];
        button2.textContent = answers[questionNum][1];
        button3.textContent = answers[questionNum][2];
        button4.textContent = answers[questionNum][3];
    }
});

/* --------------- Button 2 ------------------------ */
button2.addEventListener("click", function() {
    if (answerKey[questionNum] === 2) {
        result.textContent = "Correct!";
    }
    else {
        result.textContent = "Wrong!";
        secondsLeft -= 5;
    }

    questionNum++;

    if (questionNum == questions.length) {
        gameOver = true;
        endGame();
    }

    else {
        mainHeading.textContent = questions[questionNum];
        button1.textContent = answers[questionNum][0];
        button2.textContent = answers[questionNum][1];
        button3.textContent = answers[questionNum][2];
        button4.textContent = answers[questionNum][3];
    }
});

/* --------------- Button 3 ------------------------ */
button3.addEventListener("click", function() {
    if (answerKey[questionNum] === 3) {
        result.textContent = "Correct!";
    }
    else {
        result.textContent = "Wrong!";
        secondsLeft -= 5;
    }

    questionNum++;

    if (questionNum == questions.length) {
        gameOver = true;
        endGame();
    }
    else {
        mainHeading.textContent = questions[questionNum];
        button1.textContent = answers[questionNum][0];
        button2.textContent = answers[questionNum][1];
        button3.textContent = answers[questionNum][2];
        button4.textContent = answers[questionNum][3];
    }
});

/* --------------- Button 4 ------------------------ */
button4.addEventListener("click", function() {
    if (answerKey[questionNum] === 4) {
        result.textContent = "Correct!";
    }
    else {
        result.textContent = "Wrong!";
        secondsLeft -= 5;
    }

    questionNum++;

    if (questionNum == questions.length) {
        gameOver = true;
        endGame();
    }
    else {
        mainHeading.textContent = questions[questionNum];
        button1.textContent = answers[questionNum][0];
        button2.textContent = answers[questionNum][1];
        button3.textContent = answers[questionNum][2];
        button4.textContent = answers[questionNum][3];
    }
});

/* --------------- End Game ------------------------ */
var endGameDiv = document.createElement("div");
var initials = document.createElement("p");
var userInitials = document.createElement("input");
var submitButton = document.createElement("button");

endGameDiv.setAttribute("class", "end-game-div");
userInitials.setAttribute("type", "text");

function endGame() {
    if (secondsLeft <= 0) {
        secondsLeft = 0;
    }

    myScore = secondsLeft;
    
    clearDivs();
    
    // generate end game page
    mainContent.appendChild(mainHeading);
    mainContent.appendChild(description);
    mainContent.appendChild(endGameDiv);
    endGameDiv.setAttribute("style", "display: flex; padding: 0px");
    endGameDiv.appendChild(initials);
    endGameDiv.appendChild(userInitials);
    endGameDiv.appendChild(submitButton);
    mainContent.appendChild(result);

    mainHeading.textContent = "All done!";
    description.textContent = "Your final score is " + myScore + ".";
    initials.textContent = "Enter Initials: ";
    submitButton.textContent = "Submit"

}

/* --------------- Submit Button ------------------------ */
var highScoreDiv = document.createElement("div");
var goBack = document.createElement("button");
var clearHighScores = document.createElement("button");

submitButton.addEventListener("click", function() {
    mainHeading.remove();
    description.remove();
    result.remove();

    // parse scores
    parseScores();

    // update high scores
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.setItem("names", JSON.stringify(names));

    // Present High scores
    clearDivs();

    // show high scores
    showHighScores();
    
});

/* --------------- Parse Scores ------------------------ */
var removedScores = [];
var removedNames = [];
var spliced = false;

function parseScores () {
    if (highScores.length == 0){    // if highScores is empty, add myScore and userInitials
        highScores[0] = myScore;
        names[0] = userInitials.value;
    }
    else {
        removedScores = [];
        removedNames = [];
        spliced = false;

        for (var i = 0; i < highScores.length; i++) {
            // if my score is higher or equal to, insert my score
            if (myScore >= highScores[i]) {
                removedScores = highScores.splice(i);
                removedNames = names.splice(i);
                highScores[i] = myScore;
                names[i] = userInitials.value;
                spliced = true;
            }
            // else, check next
        }

        // if we spliced, then concat
        if (spliced) {
            highScores = highScores.concat(removedScores);
            names = names.concat(removedNames);

            // if there are 6 scores, pop the lowest
            if (highScores.length > 5) {    
                highScores.pop();
                names.pop();
            }
        }
        // else, if there are less than 5 scores, append myScore and name
        else if (highScores.length < 5) {
            highScores = highScores.concat(myScore);
            names = names.concat(userInitials.value);
        }
        // if there are 5 scores, and myScore was less than the lowest, do nothing
    }
}

/* --------------- Show Scores ------------------------ */
var highScoreList = document.createElement("ol");
var score0 = document.createElement("li");
var score1 = document.createElement("li");
var score2 = document.createElement("li");
var score3 = document.createElement("li");
var score4 = document.createElement("li");

highScoreList.setAttribute("class", "high-score-list");

function showHighScores() {
    mainContent.appendChild(mainHeading);
    mainHeading.textContent = "High scores";
    mainContent.appendChild(highScoreDiv);
    highScoreDiv.appendChild(highScoreList);

    // Only add to high score list if a score needs to be added
    if (highScores[0] !== undefined) {
        highScoreList.appendChild(score0);
        score0.textContent = names[0] + " - " + highScores[0];
    }
    if (highScores[1] !== undefined) {
        highScoreList.appendChild(score1);
        score1.textContent = names[1] + " - " + highScores[1];
    }
    if (highScores[2] !== undefined) {
        highScoreList.appendChild(score2);
        score2.textContent = names[2] + " - " + highScores[2];
    }
    if (highScores[3] !== undefined) {
        highScoreList.appendChild(score3);
        score3.textContent = names[3] + " - " + highScores[3];
    }
    if (highScores[4] !== undefined) {
        highScoreList.appendChild(score4);
        score4.textContent = names[4] + " - " + highScores[4];
    }

    highScoreDiv.appendChild(goBack);
    highScoreDiv.appendChild(clearHighScores);

    goBack.textContent = "Go back";
    clearHighScores.textContent = "Clear high scores";   
}

/* --------------- Go Back Button ------------------------ */
goBack.addEventListener("click", function() {
    clearDivs();
    init();
});

/* --------------- Clear High Scores ------------------------ */
clearHighScores.addEventListener("click", function() {
    
    highScores = [];
    names = [];

    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.setItem("names", JSON.stringify(names));

    while (!(highScoreList.children[0] == undefined)) {
        highScoreList.removeChild(highScoreList.children[0]);
    }

    clearDivs();
    showHighScores();
});

/* --------------- View High Scores ------------------------ */
var viewHighScores = document.getElementById("#view-high-scores");

viewHighScores.addEventListener("click", function() {
    gameOver = true;
    clearDivs();
    while (!(mainContent.children[0] == undefined)) {
        mainContent.removeChild(mainContent.children[0]);
    }
    showHighScores();
});

function clearDivs() {
    initDiv.remove();
    gameStartDiv.remove();
    endGameDiv.remove();
    highScoreDiv.remove();
}