const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);

let counterValue = 0;

const spanValue = document.querySelector('span#value');

decrementBtn.addEventListener('click', () => {
  const firstChild = document.querySelector('span#value').firstChild;
  firstChild.remove();
  counterValue -= 1;
  spanValue.insertAdjacentHTML('afterbegin', counterValue);
});
incrementBtn.addEventListener('click', () => {
  const firstChild = document.querySelector('span#value').firstChild;
  firstChild.remove();
  counterValue += 1;
  spanValue.insertAdjacentHTML('afterbegin', counterValue);
});
