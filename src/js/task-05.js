const defaultName = 'незнакомец';
const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', output);

function output(event) {
    if (event.currentTarget.value === '') {
        outputText.textContent = defaultName;
    } else {
        outputText.textContent = event.currentTarget.value;
    }
}