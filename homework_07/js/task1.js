var n = Number(prompt('Enter natural number 0 < N <= 20', null));
var space, spaces;
var symbol, symbols;
var pyramid = '';

if ((n > 0) && (n <= 20) && (parseInt(n) == n)) {

    for (let i = 0; i <= n; i++) {

        space = n - i;
        spaces = '';

        for (let j = 0; j < space; j++) {
            spaces += '   ';
        }

        symbol = i * 2 - 1;
        symbols = '';

        for (let j = 0; j < symbol; j++) {
            symbols += '[~]';
        }

        pyramid += spaces + symbols + '\n';
    }
    console.log(pyramid);

} else {
    console.error('Incorrect number!');
}