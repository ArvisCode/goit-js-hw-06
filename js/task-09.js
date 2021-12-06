const refs = {
  changeColor: document.querySelector(".change-color"),
  selectedColor: document.querySelector(".color"),
};

refs.changeColor.addEventListener("click", onColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.selectedColor.textContent = color;
}