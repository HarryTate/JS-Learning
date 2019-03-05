function Car(make, model, rightHandDrive, color, regYear) {
    this.make = make,
    this.model = model,
    this.rightHandDrive = rightHandDrive,
    this.color = color,
    this.regYear = regYear
}
// Using prototype to call methods on instances of an object
Car.prototype.carDetails = function(){
    return `This car is a ${this.make} ${this.model}. It is ${this.color}`;
}

Car.prototype.carAge = function() {
    let carAge = new Date().getFullYear() - this.regYear; 
    return `This car is ${carAge} year old`;
}

Car.prototype.driverSide = function() {
    if(this.rightHandDrive){
        return 'Car is right hand drive';
    } else {
        return  'Car is left hand drive';
    }
}
let car1 = new Car('Ford','Fiesta',true,'Orange',2005);
let car2 = new Car('Vauxhall','Astra',true,'Black', 2010);
let car3 = new Car('Kia','Sportage',false,'White',  2017);

function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.details = function(){
    return `${this.name} ${this.age} ${this.gender}`;
}
Person.prototype.yearBorn = function(){
    const year = new Date().getFullYear();
    return year - this.age;
}
Person.prototype.olderThan35 = function(){
    if(Person.age > 35){
        return 'This person is older than 35';
    } else {
        return 'This person is 35 or younger';
    }
}

let person1 = new Person('James', 44, 'Male');
let person2 = new Person('Jerry', 34, 'Male');