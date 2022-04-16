const inputField = document.querySelector("#validation-input")

inputField.addEventListener("blur", () => {
    if (inputField.value.length < 6) {
     inputField.classList.remove("valid")  
     return inputField.classList.add("invalid");
    }
     inputField.classList.remove("invalid")   
     inputField.classList.add("valid");
})


