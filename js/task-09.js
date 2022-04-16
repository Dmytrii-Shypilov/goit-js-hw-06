function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorBtn: document.querySelector(".change-color"),
  colorDisplay: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
}

refs.colorBtn.addEventListener("click", onClickColorBtn)

function onClickColorBtn (event) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorDisplay.textContent = refs.bodyEl.style.backgroundColor;
}
