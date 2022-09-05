const button = document.querySelector("button.change-color");
const colorValue = document.querySelector(".color");
const style = document.querySelector("style");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
style.innerHTML = 
      `.widget {
        text-align: center;
        background-color: ${getRandomHexColor()};
      }

      .widget p {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 48px;
      }

      .widget span {
        font-family: monospace;
      }

      .widget button {
        padding: 8px 12px;
        font-size: 20px;
        cursor: pointer;
      }`

colorValue.textContent = `${getRandomHexColor()}`;
    console.log(style.innerHTML);
});

