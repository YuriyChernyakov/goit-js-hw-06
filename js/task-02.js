const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

for(let ing of ingredients){
  let li = document.createElement('li');
  li.textContent = ing;
  list.append(li);
  li.classList.add('item');
};