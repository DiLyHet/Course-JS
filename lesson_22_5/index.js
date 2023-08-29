const btn = document.querySelector('.single-use-btn');

btn.addEventListener('click', clickHandler);

function clickHandler() {
    console.log('clicked');
    btn.removeEventListener('click', clickHandler);
}