import { renderTasks } from "./renderTasks.js";
import { inputElem, idCounter, addIdCounter} from "./index.js";
import { tasks, AddTask } from "./storage.js";

export function createNewTask() {
    const taskText = inputElem.value.trim();

    if (taskText !== '') {
        const newTask = { id: idCounter, text: taskText, done: false };
        AddTask(newTask);
        addIdCounter();
        window.localStorage.setItem('tasksList', JSON.stringify(tasks));
        renderTasks(tasks);
        inputElem.value = '';
    }
}