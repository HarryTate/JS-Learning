(function(){
let questions = [
    ['Q1', ['A1','A2','A3','A4'],'A4'],
    ['Q2', ['A1','A2','A3','A4'],'A4'],
    ['Q3', ['A1','A2','A3','A4'],'A4'],
    ['Q4', ['A1','A2','A3','A4'],'A4']
];
let timeLeft = 11;
let level = 0;
let score = 0;

//Converts questions and answer of current question all to lowercase
function currentQuestionsAnswerToLower(){
    for(let i = 0; i <= questions[0].length; i++){
        let stringQuestions = questions[level][1][i];
        stringQuestions = stringQuestions.toLowerCase();
        questions[level][1][i] = stringQuestions;
    }
    let stringAnswer = questions[level][2];
    stringAnswer = stringAnswer.toLowerCase();
    questions[level][2] = stringAnswer;
}

function startLevel(){   
    document.querySelector('#timer').style.display = 'inline-block';
    document.getElementById("question").innerHTML = questions[level][0]; 
    document.getElementById("answer-1").innerHTML = questions[level][1][0];
    document.getElementById("answer-2").innerHTML = questions[level][1][1];
    document.getElementById("answer-3").innerHTML = questions[level][1][2];
    document.getElementById("answer-4").innerHTML = questions[level][1][3];
    document.getElementById("score").innerHTML = "Score: " + score;
};

const answer = document.getElementsByClassName('answer');
for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", function(target){
        let userAnswer = event.target;
        userAnswer = userAnswer.innerHTML;
        userAnswer = userAnswer.toLowerCase();
        checkAnswer(userAnswer);
    }); 
}

function checkAnswer(userAnswer){
    currentQuestionsAnswerToLower();
    let currentAnswer = questions[level][2];
    level++;
    if(userAnswer === currentAnswer){
        increaseScore();
        timeLeft = 11;
        loadNextLevel();
        //Go to next Level and increase score
    } else {
        timeLeft = 11;
        loadNextLevel();
        //Go to next level and do not increase score
    }
}

function increaseScore(){
    //  increases the score by 1
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}
function loadNextLevel(){
    // Checks if player has finished all the levels
    if(level > questions[0].length){
        gameCompleted();
    } else {
        startLevel();
        // load the next level
    }
}   
function gameCompleted(){
    document.getElementById('quiz-answers').style.display = 'none'; 
    document.getElementById('question').innerHTML = 'Congratulations you scored: ' + score;
    // Hide current answers
    // Change change question too 'Game Completed, you scored var score out of 10 
    showRestartGUI();
}

function showRestartGUI(){
    document.querySelector("#restartButton").classList.toggle("hidden");
    document.querySelector('#timer').style.display = 'none';
}

document.querySelector("#restartButton").addEventListener("click", () => {
    timeLeft = 11;
    document.getElementById('quiz-answers').style.display = 'inline-block'; 
    document.querySelector("#restartButton").classList.toggle("hidden");
    level = 0;
    score = 0;
    
    startLevel();
});
function timer(){ 
    setInterval(function(){
        timeLeft--;
        document.querySelector('#timer').innerHTML = timeLeft;
        if(timeLeft === 0){
        clearTimeout(timeLeft);
        checkAnswer();
        timeLeft = 11;
        }
    }, 1000);
}

timer();
startLevel();
})();




