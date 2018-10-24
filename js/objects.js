var person = {
  id: 1,
  firstName: 'Harry',
  lastName: 'Tate' ,
  age: 22,
  grade: 'C'
};

function takeInput(){
  var input = document.getElementById("userInput").value;
  person.newValue = input;
  var newValue = person.newValue;
  document.getElementById('newValue').innerHTML = newValue;
  }

var firstName = person.firstName;
document.getElementById('firstName').innerHTML = firstName;
var lastName = person.lastName;
document.getElementById('lastName').innerHTML = lastName;
var age = person.age;
document.getElementById('age').innerHTML = age;
var grade = person.grade;
document.getElementById('grade').innerHTML = grade;
