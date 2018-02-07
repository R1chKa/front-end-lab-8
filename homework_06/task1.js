var type;

var a = parseFloat(+prompt('Enter the length of first side', null));
var b = parseFloat(+prompt('Enter the length of second side', null));
var c = parseFloat(+prompt('Enter the length of third side', null));
// a - first side, b - second side, c - third side

if ((a > 0) && (b > 0) && (c > 0)) {

    if (((a + b) > c) && ((b + c) > a) && ((c + a) > b)) {

        var p = (a + b + c) / 2;
        var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        // p - half-perimeter, s - square

        /* Equilateral triangle */
        if ((a == b) && (b == c) && (c == a)) {
            type = 'equilateral triangle';
        }

        /* Right triangle */
        else if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (c * c + b * b == a * a)) {

            /* Isoscles Right triangle */
            if ((a == b) || (b == c) || (c == a)) {
                type = 'isoscales right triangle';
            }

            /* Scalene Right triangle */
            else if (a != b && a != c && b != c) {
                type = 'scalene right triangle';
            }
        }

        /* Isoscles triangle */
        else if ((a == b) || (b == c) || (c == a)) {
            type = 'isoscales triangle';
        }

        /* Scalene triangle */
        else if (a != b && a != c && b != c) {
            type = 'scalene triangle';
        }
        console.log('Type of triangle is', type, 'and square is', s.toFixed(2));

    } else {
        console.log('Incorrect data!');
        console.log('One side = or > than sum of two others');
    }

} else {
    console.log('Incorrect data!');
    console.log('One side = or < than 0');
}