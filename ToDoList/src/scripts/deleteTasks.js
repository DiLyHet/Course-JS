import { apiEndPoint } from "./index.js";
import { renderTasks } from "./renderTasks.js";
import { tasks } from "./storage.js"; 

export function deleteTask(id) {
    
    fetch(`${apiEndPoint}/${id}`, {
        method: 'DELETE'
    }).then(result=>{
        if(result.ok){
            let index = tasks.findIndex(task=>task.id === id);
            if(index === -1) return;
        
           tasks.splice(index,1);
            renderTasks(tasks);
        }
    })
}

// icon.addEventListener('click', deleteTask(id));