const textBlock = document.getElementById("textBlock");

const bgBtn = document.getElementById("bgBtn");
const fontBtn = document.getElementById("fontBtn");
const centerBtn = document.getElementById("centerBtn");
const resetBtn = document.getElementById("resetBtn");

let currentFontSize = 16;

const bgColors = ["#f5e5daff", "#fdf7e0ff", "#dcf5f3ff", "#e7d3f0ff", "#e6c9c9ff"];
let currentColorIndex = 0;

function changeBackgroundColor() {
  currentColorIndex = (currentColorIndex + 1) % bgColors.length;
  textBlock.style.backgroundColor = bgColors[currentColorIndex];
}

function increaseFontSize() {
  currentFontSize += 2; // increase by 2px
  textBlock.style.fontSize = currentFontSize + "px";
}

function centerText() {
  textBlock.style.textAlign = "center";
}

function resetStyle() {
  currentFontSize = 16;
  currentColorIndex = 0;

  textBlock.style.backgroundColor = "#ffffff";
  textBlock.style.fontSize = "16px";
  textBlock.style.textAlign = "left";
}

bgBtn.addEventListener("click", changeBackgroundColor);
fontBtn.addEventListener("click", increaseFontSize);
centerBtn.addEventListener("click", centerText);
resetBtn.addEventListener("click", resetStyle);

