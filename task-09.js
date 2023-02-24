function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}

changeBtn.addEventListener('click', changeColor);