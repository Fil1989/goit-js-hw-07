const fieldForBoxes = document.querySelector('#boxes');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const createBoxes = () => {
  for (let i = 0; i < fieldForNumber.value; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.backgroundColor =
      'rgb(' +
      `${Math.round(Math.random() * 255)}` +
      ', ' +
      `${Math.round(Math.random() * 255)}` +
      ', ' +
      `${Math.round(Math.random() * 255)}` +
      ')';

    createDiv.style.width = `${30 + 10 * i}px`;
    createDiv.style.height = `${30 + 10 * i}px`;
    fieldForBoxes.append(createDiv);
  }
};
const destroyBoxes = () => {
  fieldForBoxes.textContent = '';
};
renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
