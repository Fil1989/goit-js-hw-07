const inputValue = document.querySelector('input#validation-input');
const checkSymbolsAmount = () => {
  if (inputValue.value.length !== Number(inputValue.dataset.length)) {
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
    return;
  }
  inputValue.classList.remove('invalid');
  inputValue.classList.add('valid');
  return;
};
inputValue.addEventListener('change', checkSymbolsAmount);
