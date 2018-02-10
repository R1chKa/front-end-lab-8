let prize = 0,
    range = 5,
    attPrize = 10;
let startGame = confirm('Do you want to play a game ?');
let reStart = true,
    winCounter;

if (startGame == true) {
    while (reStart == true) {

        // start
        let att = 3;
        let i = att;
        userNum = 0;
        reStart = true;
        while (i <= att) {

            let randomNum = Math.floor(Math.random() * range) + 1;
            console.log(randomNum);
            let userNum = parseInt(prompt('Enter a number from 0 to ' + range +
                '\nAttempts left: ' + (i) +
                '\nTotal prize: ' + prize + '$' +
                '\nPossible prize on current attempt: ' + attPrize + '$'));

            if (userNum == randomNum) { // win
                prize += attPrize;
                winCounter++;
                let continueGame = confirm('You are lucky! Do you want to continue game?');
                if (continueGame == true) { // continue
                    reStart = true;
                    range = range * 2;
                    attPrize = attPrize * 3;
                    break;
                } else { // end
                    reStart = false;
                    console.log('Thank you for a game. Come again');
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
                    if (tryAgain == true) {
                        reStart = true;
                        prize = 0;
                        att = 3;
                        i = 1;
                        game = 'start';
                    } else { // end
                        reStart = false;
                        console.log('Thank you for a game. Come again');
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