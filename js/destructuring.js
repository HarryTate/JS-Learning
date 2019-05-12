// Destructuring is taking an array or object and storing them into variables
// ES6 notaion allows us to to write this in one line of code

// Arrays Example
var one = ["car", "bard", "cat"];
// var foo = one[0];
// var doo = one[1];
// var soo = one[2];

// Shows destructuring version for array
var [foo, doo, soo] = one;

console.log(foo);
console.log(doo);
console.log(soo);

// Objects example
var two = {
  bro: "obj1",
  gro: "obj2",
  low: "obj3"
};

// var bro = two.bro;
// var gro = two.gro;
// var low = two.low;

// Show destructured version for object
var { bro, gro, low } = two;

console.log(bro);
console.log(gro);
console.log(low);
