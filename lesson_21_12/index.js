export function squaredNumbers() {
    const element = document.querySelector('.number');
    element.setAttribute('data-squared-number', element.dataset.number**2);
}