import { renderTasks } from "./renderTasks.js";
import { tasks } from "./storage.js";

export function updateTaskStatus(id, done) {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.done = done;
      window.localStorage.setItem('tasksList', JSON.stringify(tasks));
      renderTasks(tasks);
    }
  }