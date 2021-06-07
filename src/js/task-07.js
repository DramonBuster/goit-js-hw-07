const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

function changeFont(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
}

input.addEventListener('change', changeFont)