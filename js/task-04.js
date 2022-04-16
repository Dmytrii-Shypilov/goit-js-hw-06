const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
let counterValue = 0;
let counterValueDisplay = document.querySelector("#value")

decrementBtn.addEventListener("click", () => {counterValue -=1;  counterValueDisplay.textContent = counterValue});
incrementBtn.addEventListener("click", () => {counterValue +=1;  counterValueDisplay.textContent = counterValue});
