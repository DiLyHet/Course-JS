export function finishList() {
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    const special = document.querySelector('.special');
    ul.prepend(li.textContent = '1');
    ul.append(li.textContent = '8');
    special.before(li.textContent = '4');
    special.after(li.textContent = '6');
}