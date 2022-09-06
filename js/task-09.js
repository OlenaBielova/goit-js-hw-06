const button = document.querySelector("button.change-color");
const colorValue = document.querySelector(".color");
const widget = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = `${randomColor}`;
  colorValue.textContent = `${randomColor}`;
});

