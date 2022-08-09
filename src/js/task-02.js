const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const itemArray = []

ingredients.forEach(ingredient => {
  const itemIngredients = document.createElement("li")
  itemIngredients.classList.add('item')
  itemIngredients.textContent = ingredient
  itemArray.push(itemIngredients)
})

list.append(...itemArray)
