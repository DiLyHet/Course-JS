const changeEvent = document.querySelector('.text-input');
changeEvent.addEventListener('change', function() {
    console.log(changeEvent.value);
});