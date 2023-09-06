const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

function onCounterChange(elem) {
    const isButton = elem.target.classList.contains('counter__button');

    if (!isButton) {
        return;
    }

    const action = elem.target.dataset.action;

    const oldValue = Number(counterValueElem.textContent);

    counterValueElem.textContent = action === 'decrease'
        ? oldValue - 1
        : oldValue + 1;
};

counterElem.addEventListener('click', onCounterChange);