export function manageClasses() {
    document.querySelector('.one').classList.add('selected');
    document.querySelector('.two').classList.remove('selected');
    document.querySelector('.three').classList.toggle('three_done');
    const four = document.querySelector('.four');
    if (four.classList.contains('some-class') = true) {
        four.classList.add('another-class');
    }
}