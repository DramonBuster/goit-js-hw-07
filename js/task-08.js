'use strict';

const input = document.querySelector("#controls input");
const renderBtn = document.querySelector('#controls button[data-action="render"]')
const clearBtn = document.querySelector('#controls button[data-action="destroy"]')
const boxes = document.querySelector('#boxes');

input.value = 0;

const destroyBoxes = () => {
    boxes.innerHTML = ``;
}

const createBoxes = () => {
    destroyBoxes();

    for (let i = 0; i < input.value; i++) {

        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = '#' + randomColor;

        console.log(box);

        boxes.append(box);
    }
}

renderBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);