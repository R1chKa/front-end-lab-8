let prize = 0,
    range = 6,
    attPrize = 10;
let reStart = true,
    firstAttPrize;
let startGame = confirm('Do you want to play a game ?');

if (startGame) {
    while (reStart) {

        // start
        let att = 3;
        let i = att;
        userNum = 0;
        reStart = true;

        while (i <= att) {
            if (i == att) {
                firstAttPrize = attPrize;
            }

            let randomNum = Math.floor(Math.random() * range);
            let userNum = Number(parseInt(prompt('Enter a number from 0 to ' + range +
                '\nAttempts left: ' + i +
                '\nTotal prize: ' + prize + '$' +
                '\nPossible prize on current attempt: ' + attPrize + '$')));

            if (userNum == randomNum) { // win
                prize += attPrize;
                let continueGame = confirm('You are lucky! Do you want to continue game?');

                if (continueGame) { // continue
                    reStart = true;
                    range = range * 2;
                    attPrize = firstAttPrize * 3;
                    break;
                } else { // end
                    reStart = false;
                    console.log('GG. Come again');
                    break;
                }

            } else { // mistake
                if (i > 1) {
                    i--;
                    attPrize = parseInt(attPrize / 2);
                    continue;

                } else { // loose
                    console.log('Thank you for a game. Your prize is: ' + prize + '$');
                    let tryAgain = confirm('You are not lucky! Do you want to try again?');

                    if (tryAgain) {
                        reStart = true;
                        prize = 0;
                        attPrize = 10;
                        att = 3;
                        range = 5;
                        i = 1;

                    } else { // end
                        reStart = false;
                        console.log('GG. Come again');
                        break;
                    }
                    break;
                }
            }
        }
    }
} else {
    console.log('You did not become a millionaire');
}