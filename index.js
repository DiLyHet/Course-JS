export function getEvenNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (element % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}