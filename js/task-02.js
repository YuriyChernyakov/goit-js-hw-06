const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const newArray = [];

for (let i = 0; i < ingredients.length; i += 1) { 
 const li = document.createElement('li');
 li.innerHTML = ingredients[i];
 li.classList.add('item');
newArray.push(li)
}
 
list.append(...newArray);