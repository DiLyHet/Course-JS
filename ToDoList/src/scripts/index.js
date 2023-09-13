import { tasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";
import { createNewTask } from "./createTasks.js";

export const listElem = document.querySelector('.list');
export const inputElem = document.querySelector('.task-input');
export const btnElem = document.querySelector('.create-task-btn');
export let idCounter = tasks.length + 1;
export function addIdCounter(){
  idCounter++;
}
btnElem.addEventListener('click', createNewTask);

renderTasks(tasks);