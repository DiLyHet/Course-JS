const newEvent = document.querySelector('.task-status');
newEvent.addEventListener('change', function(event) {
    console.log(event.target.checked);
})