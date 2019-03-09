
"use strict";


function letKeyword(){
  let x = 'Let Keyword';
  document.getElementById('letKeyword').innerHTML = x;
}

function constKeyword(){
  const JAKE = 'Const keyword';
  document.getElementById('constKeyword').innerHTML = JAKE;
}

let obj;
function freezeObject(){
  obj = {
    object1: 1,
    object2: 2,
    object3: 3
  };
  obj.object1 = 11;
 Object.freeze(obj);
}


const magic = () => new Date();


const myConcat = (arr1,arr2) => arr1.concat(arr2);


//Run these functions on load
// letKeyword();
// constKeyword();

// Spread Opeator
let spreadArray = ['Cat','Dog','Elephant', 'Mouse'];
console.log(spreadArray);
let newArray = ['Hamster', ...spreadArray ,'snake'];
console.log(newArray);

let cats = [1,7,6,4,5];

//forEach
const newCats = cats.forEach((el) => {
  //Create new node for appending
 let newText = document.createTextNode(el); 
 //Append each Element to the DOM
  document.getElementById("animalNumbersNew").appendChild(newText);
});
console.log(newCats);

let array = [1,2,6,4,3]; 
const array2 = array.map(function (array) {
  return array * 10;
});
console.log(array2);

( function(){
  console.log('Run IIFE without being called');
})();