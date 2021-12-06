const inputNumElement = document.querySelector('input[type="number"]');
const btnCreateElement = document.querySelector('button[data-create]');
const btnDestroyElement = document.querySelector('button[data-destroy]');
const boxContainerElement = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnCreateElement.addEventListener('click', onCreateBtnClick);
btnDestroyElement.addEventListener('click', destroyBox);

let size = 30;

function createBox(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');

    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.marginTop = '10px';

    fragment.append(newDiv);
    size += 10;

    boxContainerElement.append(fragment);
  }
};

function onCreateBtnClick() {
  const amount = Number(inputNumElement.value);

  createBox(amount);
};

function destroyBox() {
  boxContainerElement.innerHTML = '';
  size = 30;//сброс до начального размера
};
