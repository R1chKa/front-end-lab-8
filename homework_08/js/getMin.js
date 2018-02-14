function getMin() {
    let min = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number' && (arguments[i] % 1) === 0) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        } else {
            return console.error('Use integer numbers');
        }
    }
    return min;
}