// Loads grid values randomly into grid
( function() { let listOfGridItems = document.getElementsByClassName('grid-item');
for (let i = 0; i < listOfGridItems.length; i++) {
    let gridValue;
    let randNumber = Math.floor(Math.random() * listOfGridItems.length);
    if(randNumber > listOfGridItems.length / 2){
        gridValue = 'Yellow';
    } else {
        gridValue = 'Blue';
    }
    listOfGridItems[i].innerHTML = gridValue; 
} 
})();

function getClickValueFromDOM(e) {
    let clickResult = e.target.innerHTML;
    checkIfValueMatch(clickResult);
}

function checkIfValueMatch(clickResult){
    if(clickResult == 'Yellow'){
        console.log('Yellow Picked');
    } else if(clickResult == 'Blue') {
        console.log('Blue Picked');
    } else {
        alert('Error');
    }
    console.log(clickResult);
}



