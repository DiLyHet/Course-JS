let tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
  ];
  
  const listElem = document.querySelector('.list');
  
  
  
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

btnElem.addEventListener('click', createNewTask);

let idCounter = 0;

function createNewTask() {
    const taskText = inputElem.value;

    if (taskText.trim() !== '') {
        const newTaskElem = document.createElement('li');
        newTaskElem.classList.add('list__item');
        idCounter += 1;
        newTaskElem.classList.add(`data-id='${idCounter}'`);
        tasks.push({ text: taskText, done: false });

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('list__item-checkbox');
        
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        taskLabel.classList.add('list__item-label');

        newTaskElem.appendChild(checkbox);
        newTaskElem.appendChild(taskLabel);
        listElem.appendChild(newTaskElem);

        inputElem.value = '';
    };
};

const renderTasks = tasksList => {
    const tasksElems = tasksList
      .sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');
        if (done) {
          listItemElem.classList.add('list__item_done');
        }
        listItemElem.append(checkbox, text);
  
        return listItemElem;
      });
  
    listElem.append(...tasksElems);
  };
  
  renderTasks(tasks);