const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const newIngredients = ingredients
  .map(element => {
    return (element = `<li>${element}</li>`);
  })
  .reduce((accum, elem) => {
    return (accum += elem);
  }, '');
let ingredientsId = document.querySelector('#ingredients');
ingredientsId.innerHTML = newIngredients;
