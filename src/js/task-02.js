const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const addRecipe = (array) => {
  const allIng = array.map(ing => {
    const element = document.createElement('li')
    element.textContent = ing
    return element
  })
  ingredientsList.append(...allIng)
}

addRecipe(ingredients);