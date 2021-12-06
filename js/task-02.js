const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients')

const fragment = document.createDocumentFragment();

function createIngredient(arr) {
  ingredients.forEach(element => {
    const elementLi = document.createElement("li");
    elementLi.textContent = element;
    elementLi.classList.add('item')
    fragment.append(elementLi);
  });
};

createIngredient(ingredients);
listIngredients.append(fragment);
