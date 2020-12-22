const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const insertImages = images.map(element => {
  const liElement = document.createElement('li');
  const image = document.createElement('img');
  image.src = element.url;
  image.alt = element.alt;
  image.setAttribute('width', '90%');
  image.setAttribute('height', '100%');
  liElement.append(image);
  return liElement;
});
let gallery = document.querySelector('#gallery');
gallery.append(...insertImages);
gallery.classList.add('flexbox');
