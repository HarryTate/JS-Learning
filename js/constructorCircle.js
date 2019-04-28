
const squareBuilder = (function(){

  const largeSquareBtn = document.getElementById("largeSquare");
  const regSquareBtn = document.getElementById("regSquare");
  const smallSquareBtn = document.getElementById("smallSquare");
  const domSquare = document.getElementById("square");

  function Square(height,length, fillColor){
    this.height = height;
    this.length = length;
    this.fillColor = fillColor;
  }

  Square.prototype.buildSquare = function(){
    domSquare.style.height = this.height + 'px';
    domSquare.style.width = this.length + 'px';
    domSquare.style.backgroundColor = this.fillColor;
  }

  const smallSquare = new Square(100,100,"#444");
  const regSquare = new Square(200,200,"#444");
  const largeSquare = new Square(300,300,"#444");

  largeSquareBtn.addEventListener('click', () => largeSquare.buildSquare());
  regSquareBtn.addEventListener('click', () => regSquare.buildSquare());
  smallSquareBtn.addEventListener('click', () => smallSquare.buildSquare());
})();




