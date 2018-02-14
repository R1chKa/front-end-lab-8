function reverseNumber(value) {
    if (typeof value === 'number' && (value % 1) === 0) {
        let revNum = value.toString().split('').reverse().join('');
        return parseInt(revNum) * Math.sign(value);
    } else {
        return console.error('Use integer numbers');
    }
}