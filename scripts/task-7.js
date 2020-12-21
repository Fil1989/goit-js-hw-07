const rangeFonts = document.querySelector('input#font-size-control');
const textChangingSize = document.querySelector('span#text');
rangeFonts.addEventListener('input', () => {
  textChangingSize.style.fontSize = `${rangeFonts.value}px`;
});
