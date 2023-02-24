const valueSpan = document.querySelector('#value');
const decrement = counter.querySelector('[data-action="decrement"]');
const increment = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementBtn = () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};

const incrementBtn = () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
};

decrement.addEventListener("click", decrementBtn);
increment.addEventListener("click", incrementBtn);
