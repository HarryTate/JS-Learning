
 

let block = document.getElementsByClassName('colored-block');
let blockItemAdd;

document.getElementById('addColor').addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        // Using an IIFE removes the loop from global scope
        ( (i) => {
            setTimeout(function () {
                blockItemAdd = block[i].classList.add('colored-block-red');
            }, 1500*i);
        })(i);
    }
    document.getElementById('addColor').style.display = 'none';
    document.getElementById('removeColor').style.display = 'inline-block';

});


document.getElementById('removeColor').addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        (function (i) {
            setTimeout(function () {
                blockItemAdd = block[i].classList.remove('colored-block-red');
            }, 1500*i);
        })(i);
    }
    document.getElementById('removeColor').style.display = 'none';
    document.getElementById('addColor').style.display = 'inline-block';
});


var timeLeft = 11;

setInterval(function(){
     timeLeft = timeLeft - 1;
     document.querySelector('#timer').innerHTML = timeLeft;
     console.log(timeLeft);
     if(timeLeft == 0){
        clearTimeout(timeLeft);
        timeLeft = 11;

        //Go to next Question
     }
    }, 1000);

   