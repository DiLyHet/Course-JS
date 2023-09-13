import { renderTasks } from "./renderTasks.js";

export let tasks = [];

window.addEventListener('storage', updateStorageHandler);
window.addEventListener('DOMContentLoaded', () => {
    let tempTasks = JSON.parse(window.localStorage.getItem('tasksList'));
    if (tempTasks !== null) {
        SetTasks(tempTasks);
        renderTasks(tasks);
    }
});
export function SetTasks(newTasks){
    tasks = newTasks;
}
export function AddTask(task){
    tasks.push(task);
}
function updateStorageHandler(e) {
    if (e.key === 'tasksList') {
        SetTasks(JSON.parse(window.localStorage.getItem('tasksList')));
        renderTasks(tasks);
    }
}