//Create a new instance of the object that can be accessed and modified.
//E.g dogsKept.dogName returns Rufus
function Constructor(){
  this.dogName = 'Rufus',
  this.dogID = 7,
  this.dogAge = 9,
  this.dogBreed = 'Poodle'
}
let dogsKept = new Constructor();


//Construstors can take parameters
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog('James', 'Blue');
//result
// terrier.name = 'James'
// terrier.color = 'blue'
// terrier.numLegs = 4

//Instance of
//Using instanceof allows you to check whether the object was created from the constructor
terrier instanceof Dog; // Returns true

//'prototype' allows all instances of an object to be created with that object
//Non prototypes will only be present in the ones they were created in
Dog.prototype.species = 'dog';


const people = {
   peopleList: [],
  init: function(){
      this.cacheDom();
      this.bindEvents();
  },
  cacheDom: function(){
      //Cache Dom Elements
      this.inputBox = document.getElementById('inputBox');
      this.addButton = document.getElementById('addName');
      this.namesList = document.getElementById('names');
  },
  bindEvents: function(){
    // Bind Events to event listeners
    this.addButton.addEventListener('click', this.addPerson.bind(this));
  },
  render: function() {
    //Render data
   
  },
  addPerson: function(){
   let userInput = this.inputBox.value;
    this.peopleList.push(userInput);
    this.render();
    this.namesList.innerHTML = '';
    for(i = 0; i < this.peopleList.length; i++){
     this.namesList.innerHTML += '<li>' + this.peopleList[i] + '</li>';
  }
    this.inputBox.value = '';
  },
  deletePerson: function(){

  }
}

people.init();