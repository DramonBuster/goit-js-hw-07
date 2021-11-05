'use strict';

const input = document.querySelector('#validation-input');

const inputLength = Number(input.getAttribute('data-length'));

const checkText = event => {
    if (event.currentTarget.value.length !== inputLength) {
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}

input.addEventListener('change', checkText);