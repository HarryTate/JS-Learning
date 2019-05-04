const COLORTESTGAME = (function() {
  const colors = [
    {
      name: "Blue",
      hex: "#0000ff",
      rgb: "0,0,225"
    },
    {
      name: "Green",
      hex: "#008b00",
      rgb: "0,139,0"
    },
    {
      name: "Red",
      hex: "#FF0000",
      rgb: "255,0,0"
    },
    {
      name: "Orange",
      hex: "#FFA500",
      rgb: "255,165,0"
    }
  ];

  const scoreDisplay = document.getElementById("score");
  let score = 0;
  let randColor;

  function getRandColor() {
    randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
  }

  function displayColorOptionsUI() {
    const optionsUl = document.getElementById("options");
    for (let i = 0; i < colors.length; i++) {
      let colorOptionEl = document.createElement("li");
      let colorOptionText = document.createTextNode(colors[i].name);
      colorOptionEl.appendChild(colorOptionText);
      optionsUl.appendChild(colorOptionEl);
    }
    
  }

  function displayColorTestUI() {
    const questionArea = document.getElementById("randColorDisplay");
    let randColorhex = getRandColor().hex;
    questionArea.style.backgroundColor = randColorhex;
  }

  function updateScoreCorrect() {
    score++;
    scoreDisplay.innerHTML = `Correct <br> Score: ${score}`;
  }
  function updateScoreIncorrect() {
    scoreDisplay.innerHTML = `Incorrect <br> Score: ${score}`;
  }

  function checkAnswer() {
    if (this.innerHTML === randColor.name) {
      updateScoreCorrect();
      displayColorTestUI();
    } else {
      updateScoreIncorrect();
      displayColorTestUI();
    }
  }

  //Add event listeners to children
  function addAnswerListeners() {
    let answersList = document.querySelectorAll("#options li");
    for (i = 0; i < answersList.length; i++) {
      answersList[i].addEventListener("click", checkAnswer);
    }
  }

  (function init() {
    scoreDisplay.innerHTML = score;
    displayColorTestUI();
    displayColorOptionsUI();
    addAnswerListeners();
  })();
})();
