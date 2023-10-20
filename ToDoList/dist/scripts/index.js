import { tasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";
import { createNewTask } from "./createTasks.js";
export const listElem = document.querySelector('.list');
export const inputElem = document.querySelector('.task-input');
export const btnElem = document.querySelector('.create-task-btn');
export const apiEndPoint = "https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/Item";
export let idCounter = 0;
if (tasks !== undefined) {
  idCounter = tasks.length + 1;
}
export function addIdCounter() {
  idCounter++;
}
btnElem === null || btnElem === void 0 || btnElem.addEventListener('click', createNewTask);
renderTasks(tasks);