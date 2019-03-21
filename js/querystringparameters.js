const urlParams = new URLSearchParams(window.location.search);
const fname = urlParams.get('fname');
const lname = urlParams.get('lname');
console.log(fname);
console.log(lname);
