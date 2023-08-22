export function squaredNumbers() {
    const elements = document.querySelectorAll('.number');
    
    elements.forEach(element => {
        const originalNumber = parseInt(element.dataset.number);
        const squaredValue = originalNumber ** 2;
        element.setAttribute('data-squared-number', squaredValue);
    });
}

squaredNumbers();
