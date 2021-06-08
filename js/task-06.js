const input = document.querySelector('#validation-input');

const inputLength = Number(input.getAttribute('data-length'));

function notFocused(event) {
    const value = event.currentTarget.value;
    if (value.length !== inputLength) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
    if (value.length === inputLength) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}

input.addEventListener('blur', notFocused)
