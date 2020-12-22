const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);

let counterValue = 0;

const spanValue = document.querySelector('span#value');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
