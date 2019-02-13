
let listOfGridItems = document.getElementsByClassName('grid-item');
for (let i = 0; i < listOfGridItems.length; i++) {
    let animal;
    let randNumber = Math.floor(Math.random() * listOfGridItems.length);
    
    if(randNumber > listOfGridItems.length / 2){
        animal = 'Yellow';
    } else {
        animal = 'blue';
    }
    listOfGridItems[i].innerHTML = animal; 
}
