const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        refs.output.textContent = event.currentTarget.value;
    } else {
        refs.output.textContent = "Anonimous";
    }
};

refs.input.addEventListener("input", onInputChange);
refs.input.addEventListener("blur", onInputChange);   



// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

