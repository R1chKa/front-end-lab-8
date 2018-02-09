let prize = 0,
    range = 5,
    attPrize = 0;
let game = 'start';
let startGame = confirm('Do you want to play a game ?');

if (startGame == true) {

    switch (game) {

        case 'start':
            let att = 3;
            let i = 1;
            let userNum = 0;
            while (i <= att) {

                if (i == 1) {
                    attPrize = 10;
                } else if (i == 2) {
                    attPrize = 5;
                } else {
                    attPrize = 2;
                }

                let randomNum = Math.floor(Math.random() * range) + 1;
                console.log(randomNum);
                let userNum = parseInt(prompt('Enter a number from 0 to ' + range +
                    '\nAttempts left: ' + (att - i) +
                    '\nTotal prize: ' + prize + '$' +
                    '\nPossible prize on current attempt: ' + attPrize + '$'));
                i++;

                // WIN
                if (userNum == randomNum) {
                    prize += attPrize;
                    let continueGame = confirm('You are lucky! Do you want to continue game?');
                    if (continueGame == true) {
                        game = 'continue';
                        break;
                    } else {
                        game = 'end';
                        break;
                    }
                } else {
                    game = 'loose';
                    break;
                }
            }

        case 'continue':
            range = range * 2;
            attPrize = attPrize * 3;
            game = 'start';
            break;

        case 'loose':
            console.log('Thank you for a game. Your prize is: ' + prize + '$');
            let tryAgain = confirm('You are not lucky! Do you want to try again?');
            if (tryAgain == true) {
                game = 'start';
            } else {
                game = 'end';
            }

        case 'end':
            console.log('Thank you for a game. Come again');
    }
} else {
    console.log('You did not become a millionaire');
}