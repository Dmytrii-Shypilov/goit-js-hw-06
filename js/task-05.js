const inputField = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputField.addEventListener("input", () => {
    if(!inputField.value) {
       return userName.textContent = "Anonymous";
    }
    userName.textContent = inputField.value
} );

