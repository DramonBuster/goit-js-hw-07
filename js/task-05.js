'use strict';

const defaultText = 'незнакомец';
const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

const updateOutput = event => {
    if (event.currentTarget.value === '') {
        return outputText.textContent = defaultText;
    }

    outputText.textContent = event.currentTarget.value;
}

inputText.addEventListener('input', updateOutput)