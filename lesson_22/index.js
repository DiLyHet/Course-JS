const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');

    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const clearEventsList = () => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML = '';
}

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearEventsList);


const toggleHandlers = () => {
    handlersEnabled = !handlersEnabled;
    updateHandlerStatus();
}

const updateHandlerStatus = () => {
    const attachBtn = document.querySelector('.attach-handlers-btn');
    const removeBtn = document.querySelector('.remove-handlers-btn');

    if (handlersEnabled) {
        divElem.addEventListener('click', logGreyDiv, true);
        divElem.addEventListener('click', logGreenDiv);

        pElem.addEventListener('click', logGreyP, true);
        pElem.addEventListener('click', logGreenP);

        spanElem.addEventListener('click', logGreySpan, true);
        spanElem.addEventListener('click', logGreenSpan);

        attachBtn.style.backgroundColor = 'green';
        removeBtn.style.backgroundColor = '';
    } else {
        divElem.removeEventListener('click', logGreyDiv, true);
        divElem.removeEventListener('click', logGreenDiv);

        pElem.removeEventListener('click', logGreyP, true);
        pElem.removeEventListener('click', logGreenP);

        spanElem.removeEventListener('click', logGreySpan, true);
        spanElem.removeEventListener('click', logGreenSpan);

        attachBtn.style.backgroundColor = '';
        removeBtn.style.backgroundColor = 'red';
    }
}

const attachBtn = document.querySelector('.attach-handlers-btn');
attachBtn.addEventListener('click', toggleHandlers);

const removeBtn = document.querySelector('.remove-handlers-btn');
removeBtn.addEventListener('click', toggleHandlers);
