function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector([data - create]);
const addNewDiv = document.querySelector('#boxes')
function createBoxes(amount) {
  const newDiv = document.createElement("div");
  addNewDiv.append(newDiv);
}
create.addEventLiastener('click', createBoxes);
