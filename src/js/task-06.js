const validation = document.querySelector("#validation-input");

function onCheckNumbersOfInput(event) {
  if (validation.value.length !== Number(validation.dataset.length)) {
    validation.classList.add("invalid");
  } else {
    validation.classList.remove("invalid");
    validation.classList.add("valid");
  }
}

validation.addEventListener("blur", onCheckNumbersOfInput);