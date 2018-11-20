let person = {
  id: 1,
  firstName: 'Harry',
  lastName: 'Tate' ,
  age: 22,
  grade: 'C'
};

var firstName = person.firstName;
document.getElementById('firstName').innerHTML = firstName;
var lastName = person.lastName;
document.getElementById('lastName').innerHTML = lastName;
var age = person.age;
document.getElementById('age').innerHTML = age;
var grade = person.grade;
document.getElementById('grade').innerHTML = grade;

function takeInput(){
  // Function that adds and object item to an object
  var input = document.getElementById("userInput").value;
  person.newValue = input;
  document.getElementById('newValue').innerHTML = input;
}

let character = ['Mickey', 'Minnie', 'Wallace', 'Woody'];

function loadArraysAndObjects(){
  document.getElementById('pushUnshiftToArray').innerHTML = character;
  document.getElementById('popShiftToArray').innerHTML = character;
  document.getElementById('spliceArray').innerHTML = character;
  document.getElementById('copiedSliceArray').innerHTML = character;
  // document.getElementById('spreadOperator').innerHTML = character;
}

document.getElementById('pushUnshiftToArray').addEventListener('click' , () => {
  let item = "Homer";
  // Push adds onto the end of the aray
  character.push(item);
  // Unshift adds onto the start of the array
  character.unshift(item);
  document.getElementById('pushUnshiftToArray').innerHTML = character;
});


document.getElementById('popShiftToArray').addEventListener('click' , () => {
  // Push removes from the end of the aray
  character.pop();
  // Unshift removes from the start of the array
  character.unshift();
  document.getElementById('popShiftToArray').innerHTML = character;
});

document.getElementById('spliceArray').addEventListener('click', () => {
  //Splice removes parts of a the array
  // First parameter indicates index from where to start removing,
  //second parameter indicates how many to remove
  //Third parameter is an optional way of adding an element in place of
  // remove elements
  let x = 'add this through splice';
  character.splice(1,2,x);
  document.getElementById('spliceArray').innerHTML = character;
});

document.getElementById('copiedSliceArray').addEventListener('click', () => {
  //Slice copies part of an array so that it can be stored in another
  //array or param
  let x = character.slice(1,3);
  document.getElementById('copiedSliceArray').innerHTML = x;
});

document.getElementById('spreadOperator').addEventListener('click', () => {
  //Spread Operator allows a quicker way of writing a prexsiting array
  let array = [2,...character,'Str'];
  document.getElementById('spreadOperator').innerHTML = array;
});
document.getElementById('indexOf').addEventListener('click', () => {
  //indexOf determine the position of an array element
  let charIndex = character.indexOf('Minnie');
  document.getElementById('indexOf').innerHTML = charIndex;
});

let nestedObject = {
  cat: 12,
  dog: 5,
  personInfo: {
    firstName: 'James',
    lastName: 'Cooper',
    age: 19,
    Gender: 'Male'
  },
  turtle: 9,
  points:15
};


document.getElementById('nestedObject').addEventListener('mouseover', () => {
  //Access Nested objects in the dame method as accessing objects
  let newObjectValue = nestedObject.personInfo.firstName = 'Phillip';
  document.getElementById('nestedObject').innerHTML = newObjectValue;
  //delete an object
  delete nestedObject.dog;
  //Create new object
  nestedObject.giraffe = 9;
});

let checkIfKeyValuePresent = () => {
  //Check if an object has key value
  nestedObject.hasOwnProperty('cat','dog','turtle'); // Returns true
  // Or
  'dog' in nestedObject; // Returns true
}

document.getElementById('forInLoop').addEventListener('click', () => {
   for(let x in nestedObject){
     console.log(x);
     var para = document.createElement("span");
     var node = document.createTextNode(x + ' ');
     para.appendChild(node);
     var element = document.getElementById("forInLoop");
     element.appendChild(para);
   };
});

document.getElementById('objectKeys').addEventListener('click', () => {
    document.getElementById('objectKeys').innerHTML = Object.keys(nestedObject);
})
