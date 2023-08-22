export function squaredNumbers() {
    const element = document.querySelectorAll('.number');
    element.setAttribute('data-squared-number', element.dataset.number**2);
}