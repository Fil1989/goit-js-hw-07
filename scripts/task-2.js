const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
ingredients.forEach(element => {
  let item = document.createElement('li');
  item.textContent = element;
  let ingredientsId = document.querySelector('#ingredients');

  return ingredientsId.appendChild(item);
});
