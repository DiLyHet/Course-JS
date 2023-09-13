import { updateTaskStatus } from "./updateTasks.js";
import { listElem } from "./index.js";

export const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const sortedTasks = tasksList.sort((a, b) => a.done - b.done);
    sortedTasks.forEach(({ id, text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        if (done) {
            listItemElem.classList.add('list__item_done');
        }

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');
        checkbox.addEventListener('click', () => {
            updateTaskStatus(id, checkbox.checked);
        });

        const taskLabel = document.createElement('label');
        taskLabel.textContent = text;
        taskLabel.classList.add('list__item-label');

        listItemElem.appendChild(checkbox);
        listItemElem.appendChild(taskLabel);
        listElem.appendChild(listItemElem);
    });
};