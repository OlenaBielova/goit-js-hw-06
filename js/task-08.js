const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit); 

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    const formData = {
        email, 
        password,
    }
    console.log(formData);

     if (email === "" || password === "" ) {
        return alert("Please fill in all the fields!");
    };

    form.reset();
    }


