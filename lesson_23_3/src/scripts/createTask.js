import { getItem, setItem } from "./storage.js";
import { renderTasks } from './renderer.js';

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem = '';
    const tasksList = getItem('tasksList') || [];

    const newTasksList = tasksList.concat({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });

    setItem('tasksList', newTasksList);

    renderTasks();
};