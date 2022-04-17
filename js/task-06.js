const inputField = document.querySelector("#validation-input")

function defineClass (toAdd, toRemove) {
    inputField.classList.remove(toRemove)   
     inputField.classList.add(toAdd);
}

inputField.addEventListener("blur", () => {
    if (inputField.value.length === 6) {
        return defineClass ("valid", "invalid")
    }

    defineClass("invalid","valid")
     
})


