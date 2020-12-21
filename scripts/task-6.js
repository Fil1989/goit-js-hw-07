const inputValue = document.querySelector('input#validation-input');
inputValue.addEventListener('change', () => {
  if (inputValue.value.length !== Number(inputValue.dataset.length)) {
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
    return;
  }
  inputValue.classList.remove('invalid');
  inputValue.classList.add('valid');
  return;
});
