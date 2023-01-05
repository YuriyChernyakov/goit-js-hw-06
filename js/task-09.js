function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChange = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
let textColor = document.querySelector('.color');

const onChangeColor = () => {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  textColor.textContent = bodyColor.style.backgroundColor;
}

colorChange.addEventListener('click', onChangeColor);
