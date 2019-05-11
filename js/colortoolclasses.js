class ColorsTool {
  constructor() {
    this.colors = [
      {
        name: "Blue",
        hex: "#0000ff"
      },
      {
        name: "Green",
        hex: "#008b00"
      },
      {
        name: "Red",
        hex: "#FF0000"
      },
      {
        name: "Orange",
        hex: "#FFA500"
      }
    ];
  }
  renderColors() {
    const domColors = document.getElementById("colorBlock");
    //Clear current colors
    domColors.innerHTML = "";
    for (let i = 0; i < this.colors.length; i++) {
      let newLi = document.createElement("li");
      let colorName = document.createTextNode(this.colors[i].name);
      newLi.appendChild(colorName);
      domColors.appendChild(newLi);
    }
  }
  returnColors() {
    return this.colors;
  }
  addColor(name, hex) {
    let newColor = {
      name: name,
      hex: hex
    };
    this.colors.push(newColor);
  }
  removeColor(el) {
    this.colors.splice(el, 1);
  }
}
let first = new ColorsTool();
document.getElementById("refresh").addEventListener("click", () => {
  first.renderColors();
});
document.getElementById("remove").addEventListener("click", () => {
  let numberToRemove = document.getElementById("removeNumber").value;

  console.log(first.colors.length);
  if (numberToRemove && numberToRemove < first.colors.length + 1) {
    numberToRemove = numberToRemove - 1;
    first.removeColor(numberToRemove);
  } else {
    alert("Item does not exist or no value entered");
  }
  first.renderColors();
});
document.getElementById("add").addEventListener("click", () => {
  let nameToAdd = document.getElementById("addName").value;
  let hexToAdd = document.getElementById("addHex").value;
  //TODO Check if color already exists
  //Check if values have fields
  if (nameToAdd || hexToAdd) {
    first.addColor(nameToAdd, hexToAdd);
  } else {
    alert("Fields Require Values");
  }
  first.renderColors();
});

first.renderColors();
