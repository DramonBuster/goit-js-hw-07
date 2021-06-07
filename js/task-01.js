const categoryList = document.querySelector('#categories');

console.log(`В списке ${categoryList.children.length} категории.`);

const itemsList = document.querySelectorAll('.item');
console.log(itemsList);

itemsList.forEach(item => console.table(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`));