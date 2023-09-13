import { getItem, setItem } from "./storage.js";
import { renderTasks } from './renderer.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains();

    if (!isCheckbox) {
        return;
    }
    const tasksList = getItem('tasksList');
    const newTasksList = tasksList
        .map(task => {
            if (task.id === e.target.dataset.id) {
                const done = e.target.checked;
                return {
                    ...task,
                    done,
                    finishDate: done
                        ? new Date().toISOString()
                        : null
                };
            }

            return task;
        });
    setItem('tasksList', newTasksList);

    renderTasks();
};