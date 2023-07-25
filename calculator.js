export function getSquaredArray(array) {
    array.map(num => num * num);
};

export function getOddNumbers(array) {
    array.filter(num => (num % 2 === 1));
};

export default (a, b) => a + b;