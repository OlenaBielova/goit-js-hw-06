const object = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${object.value}px`;

object.addEventListener("input", () => {
    text.style.fontSize = `${object.value}px`;
    })
    
