let questions = [
    ['Question 1', ['ans 1','ans 2','ans 3','ans 4'],'ANS 4'],
    ['Question 2', ['1','2','3','4ll'],'4LL'],
    ['Question 3', ['1','2','3','4'],'4'],
    ['Question 4', ['1','2','3','4'],'4']
];

let level = 0;
let score = 0;

//Converts questions and answer of current question all to lowercase
function CurrentQuestionsAnswerToLower(){
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
    document.getElementById("question").innerHTML = questions[level][0]; 
    document.getElementById("answer-1").innerHTML = questions[level][1][0];
    document.getElementById("answer-2").innerHTML = questions[level][1][1];
    document.getElementById("answer-3").innerHTML = questions[level][1][2];
    document.getElementById("answer-4").innerHTML = questions[level][1][3];
    document.getElementById("score").innerHTML = "Score: " + score;
}

function submitAnswer(target){
    //Get the answer from the input of the user
    let userAnswer = event.target;
    userAnswer = userAnswer.innerHTML;
    userAnswer = userAnswer.toLowerCase();
    checkAnswer(userAnswer);
}

function checkAnswer(userAnswer){
    console.log(userAnswer);
    CurrentQuestionsAnswerToLower();
    let currentAnswer = questions[level][2];
    level++;
    if(userAnswer === currentAnswer){
        increaseScore();
        loadNextLevel();
        //Go to next Level and increase score
    } else {
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
    console.log('Game completed');
    document.getElementById('quiz-answers').style.display = 'none'; 
    document.getElementById('question').innerHTML = 'Congratulations you scored: ' + score;
    // Hide current answers
    // Change change question too 'Game Completed, you scored var score out of 10
    
    
}

function restartGame(){
    
}


startLevel();