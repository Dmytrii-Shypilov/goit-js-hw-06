const refs = {
    form: document.querySelector('.login-form'),
    emailInput: document.querySelector('[name="email"]'),
    passwordInput: document.querySelector('[name="password"'),
};

refs.form.addEventListener("submit", onButtonSubmit);

function onButtonSubmit (event) {
    event.preventDefault();

    if (!refs.emailInput.value || !refs.passwordInput.value) {
        return alert("Все поля должны быть заполнены!")
    }
 const formElements = event.currentTarget.elements;

 const email = formElements.email.value;
 const password = formElements.password.value;

 const formData = {
    email,
    password,
 }
 console.log(formData)
 event.currentTarget.reset()
}

