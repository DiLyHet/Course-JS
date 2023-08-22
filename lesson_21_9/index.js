export function finishList() {
    const ul = document.querySelector('.list');
    const special = document.querySelector('.special');

    const li1 = document.createElement('li');
    li1.textContent = '1';
    ul.prepend(li1);

    const li2 = document.createElement('li');
    li2.textContent = '8';
    ul.append(li2);

    const li3 = document.createElement('li');
    li3.textContent = '4';
    special.before(li3);

    const li4 = document.createElement('li');
    li4.textContent = '6';
    special.after(li4);
}
