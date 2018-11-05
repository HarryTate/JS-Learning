document.getElementById("regex").addEventListener("click", usingTestMethod);
function usingTestMethod(){
  let str = "Here is a string that we can test";
  let regex = /that we can test/;
  //See if regex os cotained in str
  let result = regex.test(str);
  document.getElementById("regex").innerHTML = result;
  return result;
}
document.getElementById("multipleRegex").addEventListener("click", checkMultipleRegex);
function checkMultipleRegex(){
  let str = "Jake Paul Ian Albert Theo";
  let regex = /Paul|Ian|Albert/;
  let result = regex.test(str);
document.getElementById("multipleRegex").innerHTML = result;
}
