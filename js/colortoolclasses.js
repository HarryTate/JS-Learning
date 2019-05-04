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
    var newColor = {
      name: name,
      hex: hex
    };
    this.colors.push(newColor);
  }
  removeColor(el) {
    this.colors.splice(el, 1);
  }
}
var first = new ColorsTool();
document.getElementById("refresh").addEventListener("click", () => {
  first.renderColors();
});
document.getElementById("remove").addEventListener("click", () => {
  let numberToRemove = document.getElementById("removeNumber").value;
  numberToRemove = numberToRemove - 1;
  first.removeColor(numberToRemove);
  first.renderColors();
});
first.renderColors();
