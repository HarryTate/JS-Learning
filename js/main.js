// Block 1
var increaseNumberByOne = 0;
function increaseNumber(){
  increaseNumberByOne++;
  document.getElementById("btn-increment").innerHTML = increaseNumberByOne;
}

// Block 2
function getDate(){
  var date = new Date();
  document.getElementById("date").innerHTML = date.toDateString();
}
// Block 3
function changeWord(){
   var word = "new word";
   document.getElementById("word").innerHTML = word;
}
// Block 4
function randomNumber(){
  var number = Math.floor((Math.random() * 100) + 1);
  document.getElementById("randomNumber").innerHTML = number;
}
// Block 5
function generateWord(){
  var words = ["cheese", "butter", "steak", "chips", "fruit", "cola"];
  var randomWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("randomWord").innerHTML = randomWord;
}
// Block 6
function matchNumber(numberToBeMatched){
   if(numberToBeMatched == 2){
     return  "yes";
   } else {
     return "Not Equal";
   }
}
function activateMatchNumber(){
  numberToBeMatched = 2;
  document.getElementById("numberMatch").innerHTML = matchNumber(numberToBeMatched);
}
// Block 7
function chooseNumber(choice){
   var user;
   user = choice;
   document.getElementById("printChoice").innerHTML = user ;
}
// Block 8
function greaterThanTen(num){
  if(num > 10){
    return "Number is greater than 10";
  } else if (num < 10){
      return "Number is less than 10";
  } else{
    return "Number is ten";
  }
}
function activateNumCheck(){
  document.getElementById("numberGreaterOrLessThan").innerHTML = greaterThanTen(10);
}
// Block 9
function numberBetweenTwoValues(num){
  if (num < 10 && num > 5){
    return "Number is between 5 and 10";
  } else {
    return "Number is not between 5 and 10";
  }
}

function activateNumberBetween(){
  document.getElementById("numberBetweenTwoValues").innerHTML = numberBetweenTwoValues(11);
}
// Block 10
function whatIsSizeOfNumber(num){
  if(num < 5){
    return "Number is less than 5";
  } else if (num <= 10){
    return "Number between 5 and 10";
  } else if (num <= 20){
    return "Number between 11 and 20";
  } else{
    return "Number is greater than 20";
  }
}

function activateWhatIsSizeOfNumber(){
  document.getElementById("whatIsSizeOfNumber").innerHTML = whatIsSizeOfNumber(11);
}
// Block 11
function takeInput(){
  var input = document.getElementById("userInput").value;
    document.getElementById("output").innerHTML = input;
  }
// Block 12
function addFiveToNumber(){
  var input = document.getElementById("addFive").value;
  input = parseInt(input);
  input += 5;
  document.getElementById("addFiveResult").innerHTML = input;
}
// Block 13
function switchCase(animal){
  switch(animal){
    case "cat":
      return "meow";
    break;
    case "dog":
      return "woof";
    break;
    case "tiger":
      return "rawr!!!";
    break;
    default:
      return "no Sound";
  }

}
function activateSwitchCase(){
  document.getElementById("switchCase").innerHTML = switchCase("cat");
}

function accessObjectDotNotation(){
  var cat = {
    legs: 4,
    gender: 'male',
    tail: 1,
    age: 7
  };
  var tail = cat.legs;
   document.getElementById("objectDot").innerHTML = tail;
}

function accessObjectBracketNotation(){
  var dog = {
    'legs': 6,
    'gender': 'Female',
    'tail': 2,
    'age': 12
  };
  var age = dog['age'];
  document.getElementById('objectBracket').innerHTML = age;
}
