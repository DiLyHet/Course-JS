export function getSquaredNumbers(array) {
    array.map(num => num ** 2);
};

export function getOddNumbers(array) {
    array.filter(num => (num % 2 === 1));
};

export default (a, b) => a + b;