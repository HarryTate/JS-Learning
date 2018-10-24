var cardsInPlayersHand = []
var total = 0;
var opponentScore = 0;

function pickACard() {
    var displayHand = document.getElementById("hand");
    displayHand.style.display = "block";
    var playerCard = Math.floor((Math.random() * 13) + 1);
    cardsInPlayersHand.push(playerCard);
    total = playerCard + total;

     if (total > 21) {
        playerLose();
    } else {
        document.getElementById("playerHandTotal").innerHTML = total;
        document.getElementById("playerHand").innerHTML = cardsInPlayersHand;
        document.getElementById("oppScore").innerHTML = opponentScore;
    }
}

function playerLose() {
    document.getElementById("losingCards").innerHTML = cardsInPlayersHand ;
    document.getElementById("losingScore").innerHTML = total;
    var displayHand = document.getElementById("hand");
    displayHand.style.display = "none";
    var inGame = document.getElementById("inGame");
    inGame.style.display = "none";
    var gameLost = document.getElementById("gameLost");
    gameLost.style.display = "block";
}
function playerDraw(){
    var displayHand = document.getElementById("hand");
    displayHand.style.display = "none";
    var inGame = document.getElementById("inGame");
    inGame.style.display = "none";
    var gameDraw = document.getElementById("gameDraw");
    gameDraw.style.display = "block";
}

function restartGame(){
  total = 0;
  cardsInPlayersHand = [];
  var gameDraw = document.getElementById("gameDraw");
  gameDraw.style.display = "none";
  var hideLose = document.getElementById("gameLost");
  hideLose.style.display = "none";
  var inGame = document.getElementById("inGame");
  inGame.style.display = "block";
}

function oppScore(){
     opponentScore = Math.floor((Math.random() * 21) + 1);
    if (opponentScore > total){
        playerLose();
    } else if (total > opponentScore){
        console.log('playerWins');
    } else {
        console.log('playerDraw');
    }

}

function opponentInGame(){
    var randomBoolean = Math.random() < 0.7;
    if(randomBoolean){
        console.log('true');
        oppScore();
    } else {

        console.log('false');
    }
}
