const urlParams = new URLSearchParams(window.location.search);
const block = urlParams.get("block");
const firstBlock = document.querySelector(".block1");
const secondBlock = document.querySelector(".block2");
const defaultBlock = document.querySelector(".default");

if (block === "firstblock") {
  // Display first block
  firstBlock.classList.add("show");
} else if (block === "secondblock") {
  // Display second block
  secondBlock.classList.add("show");
} else {
  // Default Block
  defaultBlock.classList.add("show");
}
