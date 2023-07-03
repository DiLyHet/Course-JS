let result = 0;

for (let i = 1; i <= 5; ) {
    for (let k = 1; k <= 10; k++) {
        result = i * k;
        console.log(i + ' x ' + k + ' = ' + result);
    }
    i++;
    if (i !== 6) {
    console.log('=> ' + i + ' <=');
    }
}