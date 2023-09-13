import { getItem } from "./storage.js";

const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
}

const createListItem = ({ text, done, id, finishDate }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({ done, id });
    if (done) {
        listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkboxElem, text);

    if (finishDate) {
        const finishDateElem = document.createElement('span');
        finishDateElem.classList.add('list__item-finish-date');
        finishDateElem.textContent = new Date(finishDate).toLocaleDateString();
        listItemElem.appendChild(finishDateElem);
    }

    return listItemElem;
}

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];

    listElem.innerHTML = '';
    const tasksElems = tasksList
        .sort(compareTasks)
        .map(createListItem);

    listElem.append(...tasksElems);
};