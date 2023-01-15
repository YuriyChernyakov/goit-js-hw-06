function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');
const inpNumb = document.getElementsByTagName('input')[0];
const addNewDiv = document.querySelector('#boxes');
const deleteDiv = document.querySelector('[data-destroy]');
const data = [];
let width = 30;
let heigth = 30;
function createBoxes() {
  for (let i = 0; i < inpNumb.value; i++) {
    let w = (width += 10 + i);
    let h = (heigth += 10 + i);
    if (i != 0) {
      data.push(createBox(w, h))
    }
    else {
      data.push(createBox(width, heigth))
    };
  }
  drawBoxes();
};

function drawBoxes() {
  addNewDiv.insertAdjacentHTML("afterbegin", data.join(''));
}

function createBox(w, h) {
  return `<div style="width: ${w}px; height: ${h}px; background-color: ${getRandomHexColor()}"></div>`
}

create.onclick = () => createBoxes();

deleteDiv.onclick = () => {
  addNewDiv.innerHTML = '';
}

