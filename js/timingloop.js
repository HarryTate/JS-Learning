
 

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


   