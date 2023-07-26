export function reverseArray(arr) {
    if (Array.isArray(arr) === false) {
      return null;
    }
    else {
      let newArr = arr.slice();
      return newArr.reverse();
    }
  };