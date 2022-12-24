const value = document.querySelector('#value');
const butdec = document.querySelector('button[data-action="decrement"]');
const butinc = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const increment = () => {counterValue += 1; value.textContent = counterValue};
const decrement = () => {counterValue -= 1; value.textContent = counterValue};
butdec.addEventListener('click', decrement);
butinc.addEventListener('click', increment);