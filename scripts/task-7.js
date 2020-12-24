const rangeFonts = document.querySelector('input#font-size-control');
const textChangingSize = document.querySelector('span#text');
const changeFontSize = () => {
  textChangingSize.style.fontSize = `${rangeFonts.value}px`;
};
rangeFonts.addEventListener('input', changeFontSize);
