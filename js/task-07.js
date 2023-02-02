const refs = {
  inputRange: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};

refs.textSpan.style.fontSize = `${refs.inputRange.value}px`;
refs.inputRange.addEventListener("input", onInputRange);

function onInputRange(event) {
  refs.textSpan.style.fontSize = `${event.target.value}px`;
}
