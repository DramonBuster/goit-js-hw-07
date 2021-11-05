'use strict';

const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

for (const category of categories) {
    const headline = category.querySelector("h2");
    const categoryItems = category.querySelectorAll("li");
    console.log(`Категория: ${headline.textContent}`);
    console.log(`Количество элементов: ${categoryItems.length}`)
}