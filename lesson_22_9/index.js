const btns = document.querySelectorAll('.pagination__page');
btns.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

function handleClick(event) {
    console.log(event.target.dataset.pageNumber);
};