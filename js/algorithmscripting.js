//reverse a string
function reverseString(str) {
  // .split breaks up into array
  // .reverse reverses the array
  // .join rejoins the the array
  return str.split('').reverse('').join('');
}
reverseString("hello");
