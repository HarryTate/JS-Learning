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

document.getElementById("ignoreCaseRegex").addEventListener("click", ignoreCaseRegex);
function ignoreCaseRegex(){
  let str = "The coLD man went to the market";
  //  '/i' ignores the case of the letters
  let regex = /cold/i;
  let result = regex.test(str);
  document.getElementById('ignoreCaseRegex').innerHTML = result;
}

document.getElementById("extractMatches").addEventListener("click",extractMatchRegex);
function extractMatchRegex(){
  let str = "cat dog dog cat squirell cat";
  // .match() extracts matches instead of true or false
  // '/g' returns all matches
  regex = /cat/g;
  result = str.match(regex);
  document.getElementById('extractMatches').innerHTML = result;
}

document.getElementById('wildcardCharacter').addEventListener("click",wildcardRegex);
function wildcardRegex(){
  let str = "cat sat log mat fit pat dat";
  let regex = /.at/g;
  let result = str.match(regex);
  document.getElementById('wildcardCharacter').innerHTML = result;
}
document.getElementById('matchSingleCharacters').addEventListener("click",matchSingleCharacters);
function matchSingleCharacters(){
  let str = "baG big Bug beg bog";
  let regex = /b[aeiou]g/gi;
  let result = str.match(regex);
  document.getElementById('matchSingleCharacters').innerHTML = result;
}

 document.getElementById('matchLettersAlphabet').addEventListener("click",matchLettersOfAlphabet);
 function matchLettersOfAlphabet(){
   let str = "Hello, my name is jeff and I love Javascript.";
    //matches letters from a-z
    //space after a-z means include spaces
   let regex = /[a-z ]/gi;
   let result = str.match(regex);
    // .tostring() converts result to a string
   result = result.toString();
    //.replace replaces commas with spaces
  result = result.replace(/,/g,"");
   document.getElementById('matchLettersAlphabet').innerHTML = result;
 }
  document.getElementById('nonMatchingVowels').addEventListener('click', matchNonMatchingCharacters);
  function matchNonMatchingCharacters(){
  let str = "Here is a str full of text with lots of letters";
  // Remove letters aeiou with ^
  let regex = /[^aeiou]/gi;
  let result = str.match(regex);
  result = result.toString();
   //.replace replaces commas with spaces
  result = result.replace(/,/g,"");
  document.getElementById('nonMatchingVowels').innerHTML = result;
}
