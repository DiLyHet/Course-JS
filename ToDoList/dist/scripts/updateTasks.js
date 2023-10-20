import "core-js/modules/es.promise.js";
import { renderTasks } from "./renderTasks.js";
import { tasks } from "./storage.js";
import { apiEndPoint } from "./index.js";
export function updateTaskStatus(id, done) {
  const taskToUpdate = tasks.find(task => task.id === id);
  if (taskToUpdate) {
    taskToUpdate.done = done;
    fetch(apiEndPoint + "/" + taskToUpdate.id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        done: taskToUpdate.done
      })
    }).then(res => {
      if (res.ok) {
        renderTasks(tasks);
      }
    }).then(tasks => {}).catch(error => {
      console.error("Request failed");
    });
  }
}