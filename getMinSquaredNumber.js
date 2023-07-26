export function getMinSquaredNumber(array) {
    if (!Array.isArray(array) || array.length < 1) {
        return null;
    }
    else {
        let moduleArray = array.map(num => Math.abs(num));
        let result = Math.min( ...moduleArray );
        return result * result;
    }
};

console.log(getMinSquaredNumber([-5, 10, 56, -143, -2]));