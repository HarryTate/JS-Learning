//Strict mode throws an error when undeclared variables are used
"use strict";

// let declares a variable that produces a variable that can only be declared once
function letKeyword(){
  let x = 'Let Keyword';
  document.getElementById('letKeyword').innerHTML = x;
}
//Const declares a variable that is read only e.g cannot change value once declared
// Best practice states const variables should be declared in uppcercase
//const variables are still mutable e.g. values in array can be altered but the whole array cannot be decalred
function constKeyword(){
  const JAKE = 'Const keyword';
  document.getElementById('constKeyword').innerHTML = JAKE;
}


//Freezing an object means you can no longer add, update or delete properties of that object
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

//ES6 allows the ability to shorthand anom functions
var magic = function() {
  "use strict";
  return new Date();
};
//Shorthand version
//const magic = () => new Date();

//Shorthand function with parameter
//This shorthand version includes parameters
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
//const myConcat = (arr1,arr2) => arr1.concat(arr2);


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

//IIFE
// Runs a function on page load
( function(){
  console.log('Run IIFE without being called');
})();