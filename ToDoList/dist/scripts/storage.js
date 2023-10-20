import "core-js/modules/es.promise.js";
import { renderTasks } from "./renderTasks.js";
import { apiEndPoint } from "./index.js";
export let tasks = [];
window.addEventListener('DOMContentLoaded', () => {
  fetch(apiEndPoint, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      res.json().then(result => {
        SetTasks(result);
        renderTasks(tasks);
      });
    }
  }).then(tasks => {}).catch(error => {
    console.error("Request failed");
  });
});
export function SetTasks(newTasks) {
  tasks = newTasks;
}
export function AddTask(task) {
  tasks.push(task);
}