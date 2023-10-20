import { createNewTask } from "../createTasks";
import { deleteTask } from "../deleteTasks";
import { tasks } from "../storage";

// describe('createNewTask', () => {
//   it('should add a new task to the tasks list', () => {
//     let lastLength = tasks.length;
//     createNewTask();
//     if(tasks[tasks.length-1] != undefined)
//     deleteTask(tasks[tasks.length-1].id);
// if(tasks != undefined)
//     expect(tasks).toHaveLength(lastLength-1);
//     // Ваш тест на createNewTask тут
//   });
// });

test('Checking for deleting tasks', () => {
  tasks = [{
    id: 1,
    text: 'a',
    done: false
  }, {
    id: 2,
    text: 'b',
    done: false
  }, {
    id: 3,
    text: 'c',
    done: false
  }, {
    id: 4,
    text: 'd',
    done: false
  }];
  deleteTask(4);
  expect(tasks).toHaveLength(3);
});