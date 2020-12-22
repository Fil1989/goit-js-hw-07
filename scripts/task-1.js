const categories = document.querySelectorAll('.item');
const message = `У списку ${categories.length} категорії.`;
console.log(message);
categories.forEach(element => {
  let header = element.querySelector('h2').textContent;
  let amountOfItems = element.querySelectorAll('li').length;
  console.log(` Категорія: ${header}\n Кількість елементів: ${amountOfItems}`);
});
