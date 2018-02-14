function getClosestToZero() {
    let min = Infinity;
    let closest;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number' && (arguments[i] % 1) === 0) {
            if (Math.abs(arguments[i]) < min) {
                min = Math.abs(arguments[i]);
                closest = arguments[i];
            }
        } else {
            return console.error('Use integer numbers');
        }
    }
    return closest;
}