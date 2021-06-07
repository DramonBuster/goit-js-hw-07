let counterValue = 0;

const counter = document.querySelector('#value')
const buttonInc = document.querySelector('[data-action="increment"]')
const buttonDec = document.querySelector('[data-action="decrement"]')

const incCounter = () => {
    counterValue += 1;
    return counter.textContent = counterValue;
}

const decCounter = () => {
    counterValue -= 1;
    return counter.textContent = counterValue;
}

buttonInc.addEventListener('click', incCounter)
buttonDec.addEventListener('click', decCounter)

console.log(counterValue);