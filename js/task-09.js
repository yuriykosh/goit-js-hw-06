function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  textColorValue: document.querySelector(".color"),
  changeColorButton: document.querySelector(".change-color"),
};

refs.changeColorButton.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick(event) {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = refs.textColorValue.textContent = color;
}
