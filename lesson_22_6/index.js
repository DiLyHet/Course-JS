const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

function handleClick(event) {
    console.log(event.target.textContent);
};
