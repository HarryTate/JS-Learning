var cardsInPlayersHand = []
var total = 0;

function startGame(){

}
function pickACard() {
    var displayHand = document.getElementById("hand");
    displayHand.style.display = "block";
    var playerCard = Math.floor((Math.random() * 13) + 1);
    cardsInPlayersHand.push(playerCard);
    total = playerCard + total;
    if (total > 13) {
        playerLose();
    } else {
        console.log(cardsInPlayersHand);
        document.getElementById("playerHandTotal").innerHTML = playerCard;
        document.getElementById("playerHand").innerHTML = cardsInPlayersHand;
    }
}

function playerLose() {
    console.log("your total was" + total);
    document.getElementById("losingCards").innerHTML = cardsInPlayersHand ;
    document.getElementById("losingScore").innerHTML = total;
    total = 0;
    cardsInPlayersHand = [];
    var displayHand = document.getElementById("hand");
    displayHand.style.display = "none";
    var inGame = document.getElementById("inGame");
    inGame.style.display = "none";
    var gameLost = document.getElementById("gameLost");
    gameLost.style.display = "block";
}

function restartGame(){
  var hideLose = document.getElementById("gameLost");
  hideLose.style.display = "none";
  var inGame = document.getElementById("inGame");
  inGame.style.display = "block";
}
