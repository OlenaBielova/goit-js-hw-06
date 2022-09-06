const button = document.querySelector("button.change-color");
const colorValue = document.querySelector(".color");
const widget = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
widget.style.backgroundColor = `${getRandomHexColor()}`;

colorValue.textContent = `${getRandomHexColor()}`;
    console.log(style.innerHTML);
});

