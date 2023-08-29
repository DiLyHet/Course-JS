const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

btn.addEventListener('click', function() {
    console.log(input.value);
});