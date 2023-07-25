function getPrimes(num) {
    let numbers = [];
    for (let i = num; i >= 2; i--) {
        for (let k = 2; k < i; k++) {
            if (i % k === 0) {
                numbers.push(i);
            }
        }
    }
    for (let r = 2; r <= num; r++) {
        if (numbers.includes(r)) {
            continue;
        }
        else console.log(r);
    }
  }
  getPrimes(6);