const input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute("data-length"));

function onInputBlur(event) {
    if (event.currentTarget.value.length === dataLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};

input.addEventListener("blur", onInputBlur);

