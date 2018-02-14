function getMin() {
    let min = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        // if (arguments[i]) { TODO: check to integer number
        if (arguments[i] < min) {
            min = arguments[i];
        }
        // } else {
        // 	console.error('Use integer numbers');// }
    }
    return min;
}