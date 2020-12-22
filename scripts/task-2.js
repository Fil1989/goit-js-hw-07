const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const arrayIngridients = ingredients.map(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  return item;
});
const ingredientsUl = document.querySelector('#ingredients');
ingredientsUl.append(...arrayIngridients);

// -----------Варіант 2-------------
// ingredients.forEach(element => {
//   let item = document.createElement('li');
//   item.textContent = element;
//   let ingredientsId = document.querySelector('#ingredients');

//   return ingredientsId.appendChild(item);
// });

// ------------Варіант 3-----------------
// const newIngredients = ingredients
//   .map(element => {
//     return (element = `<li>${element}</li>`);
//   })
//   .reduce((accum, elem) => {
//     return (accum += elem);
//   }, '');
// let ingredientsId = document.querySelector('#ingredients');
// console.log(newIngredients);
// ingredientsId.innerHTML = newIngredients;
