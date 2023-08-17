export function setButton(buttonText) {
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML = `<button>${buttonText}</button>`;
}
