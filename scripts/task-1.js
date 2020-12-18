const categories = document.querySelector('#categories').children;
const message = `У списку ${categories.length} категорії.`;
console.log(message);
for (let i = 0; i < categories.length; i += 1) {
  let header = categories[i].querySelector('h2').textContent;
  let amountOfItems = categories[i].querySelector('ul').children.length;
  console.log(` Категорія: ${header}\n Кількість елементів: ${amountOfItems}`);
}
