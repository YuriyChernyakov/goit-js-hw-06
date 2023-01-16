const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const data = [];

function createList() {
  for (let i = 0; i < ingredients.length; i++) {
    data.push(createLi(ingredients[i]))
    }
  newList();
};

createList();

function createLi(text) {
  return `<li class = "item">${text}</li>`
}

function newList() {
  list.insertAdjacentHTML("afterbegin", data.join(''));
}