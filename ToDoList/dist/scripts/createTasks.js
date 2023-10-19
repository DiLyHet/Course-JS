import { renderTasks } from "./renderTasks.js";
import { inputElem, idCounter, addIdCounter, apiEndPoint } from "./index.js";
import { tasks, AddTask } from "./storage.js";

export function createNewTask() {
    const taskText = inputElem.value.trim();

    if (taskText !== '') {
        const newTask = { id: idCounter, text: taskText, done: false };
        
        fetch(apiEndPoint, {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newTask)
          }).then(res => {
            if (res.ok) {
                res.json().then(result=>{
                    AddTask(result);
                    addIdCounter();
                    renderTasks(tasks);
                });
                
            }
           
          }).then(tasks => {
            
          }).catch(error => {
            console.error("Request failed");
          })
    
        inputElem.value = '';
    }
}