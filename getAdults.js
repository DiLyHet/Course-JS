export const getAdults = obj => {
    let newObj = {};
    for (let key in obj) {
      if (obj[key] >= 18) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
    };