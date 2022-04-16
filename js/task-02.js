const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let allIngredients = [];

for (const name of ingredients) {
  const ingredient = document.createElement('li')
  ingredient.textContent = name;

  allIngredients.push(ingredient)
}

const ingredientsList = document.querySelector("#ingredients")

ingredientsList.append(...allIngredients)

