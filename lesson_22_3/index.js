const changeEvent = document.querySelector('.task-status');
changeEvent.addEventListener('change', function() {
    console.log(changeEvent.checked);
});