let counterValue = 0;

const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const changeValue = document.getElementById('value');

const increment = () => {
  counterValue += 1;
  changeValue.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  changeValue.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
