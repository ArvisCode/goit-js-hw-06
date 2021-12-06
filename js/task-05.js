const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const spanText = event => {
  output.textContent = input.value === '' ? 'Anonymous' : event.currentTarget.value;
};

input.addEventListener('input', spanText);