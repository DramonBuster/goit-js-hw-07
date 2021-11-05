const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const recipe = document.querySelector('#ingredients');

const addRecipe = list => {
  const createRecipe = list.map(element => {
    const ingredient = document.createElement('li');
    ingredient.textContent = element;
    return ingredient;
  })

  recipe.append(...createRecipe);
}

addRecipe(ingredients);