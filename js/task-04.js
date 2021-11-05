'use strict';

let counterValue = 0;

const incrButt = document.querySelector('#counter button[data-action="increment"]');
const decrButt = document.querySelector('#counter button[data-action="decrement"]');
const counterValueText = document.querySelector('#value')

const increment = () => {
    counterValue += 1;
    counterValueText.textContent = counterValue;
    console.log(counterValue);
}

const decrement = () => {
    counterValue -= 1;
    counterValueText.textContent = counterValue;
    console.log(counterValue);
}

incrButt.addEventListener('click', increment);
decrButt.addEventListener('click', decrement);
