const fontSizeControl = document.querySelector("#font-size-control");
const textDisplay = document.querySelector("#text")

fontSizeControl.addEventListener("input", () => {
   textDisplay.style.fontSize = fontSizeControl.value + "px";
})

console.log(fontSizeControl)
console.log(textDisplay.style.fontSize)


