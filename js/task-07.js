'use strict';

const slider = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

slider.value = 16;

const changeFontSize = event => {
    text.style.fontSize = `${slider.value}px`
}

slider.addEventListener('change', changeFontSize);