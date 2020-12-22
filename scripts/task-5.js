const inputValue = document.querySelector('input#name-input');
inputValue.addEventListener('change', () => {
  const spanContent = document.querySelector('span#name-output');
  if (inputValue.value === '') {
    spanContent.textContent = 'незнайомець';
    return;
  }
  spanContent.textContent = inputValue.value;
});
