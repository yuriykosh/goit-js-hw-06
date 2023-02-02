const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputValueBlur);

function onInputValueBlur(event) {
  const inputValueLength = +event.target.value.trim().length;
  const dataLength = +event.target.dataset.length;
  if (inputValueLength === dataLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
