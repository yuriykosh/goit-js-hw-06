let counterValue = 0;

const refs = {
  incrementButton: document.querySelector('[data-action="increment"]'),
  decrementButton: document.querySelector('[data-action="decrement"]'),
  spanValue: document.querySelector("#value"),
};

refs.incrementButton.addEventListener("click", onIncrementButtonClick);
refs.decrementButton.addEventListener("click", onDecrementButtonClick);

function onIncrementButtonClick(event) {
  counterValue += 1;
  refs.spanValue.textContent = counterValue;
}

function onDecrementButtonClick(event) {
  counterValue -= 1;
  refs.spanValue.textContent = counterValue;
}
