const inputValue = document.querySelector('input#name-input');
inputValue.addEventListener('change', () => {
  const spanContent = document.querySelector('span#name-output');

  const spanFirstChild = spanContent.firstChild;
  spanFirstChild.remove();
  if (inputValue.value === '') {
    spanContent.insertAdjacentHTML('afterbegin', 'незнайомець');
    return;
  }
  spanContent.insertAdjacentHTML('afterbegin', inputValue.value);
});
