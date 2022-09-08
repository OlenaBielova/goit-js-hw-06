function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#controls input");
const boxesContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");


createBtn.addEventListener("click", () => {
  const amount = Number(inputNumber.value);
  // console.log(amount);

  let arr = [];
  let i = 0;
  let x = 30;
    while (i < amount) {
      arr.push(x);
      x += 10;
      i += 1;
    }
  // console.log(arr);
  
  const boxesList = arr.map((x) => {
    console.log(x);
    const newDiv = document.createElement("div");
    newDiv.style.width = `${x}px`;
    newDiv.style.height = `${x}px`;
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    return newDiv;
  })
  // console.log(boxesList);

  boxesContainer.append(...boxesList);
});
// console.log(boxesContainer);
  

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});








