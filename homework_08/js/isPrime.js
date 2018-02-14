function isPrime(value) {
    if (typeof value === 'number' && (value % 1) === 0) {
        for (var i = 2; i < value; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return value > 1;
    } else {
        return console.error('Use integer numbers');
    }

}