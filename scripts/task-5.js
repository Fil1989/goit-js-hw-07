const inputValue = document.querySelector('input#name-input');
inputValue.addEventListener('input', () => {
  const spanContent = document.querySelector('span#name-output');
  if (inputValue.value === '') {
    spanContent.textContent = 'незнайомець';
    return;
  }
  spanContent.textContent = inputValue.value;
});
