// Currency rate at 15:30 on 2/7/2018

// uah > usd = 27.460866
// uah > euro = 33.856502

var euro = Number(prompt('Enter emount of EURO', null));
var usd = Number(prompt('Enter emount of USD', null));

var uahToUsd = 27.460866;
var uahToEuro = 33.856502;

if ((euro > 0) && (usd > 0)) {
    var uahFromEuro = euro * uahToEuro;
    var uahFromUsd = usd * uahToUsd;
    var usdFromEuro = uahToEuro / uahToUsd;

    console.log(euro + ' euros are equal ' + parseFloat(uahFromEuro.toFixed(2)) + ' UAH, ' + usd + ' dollars are equal ' + parseFloat(uahFromUsd.toFixed(2)) + ', one euro is equal ' + parseFloat(usdFromEuro.toFixed(2)) + ' dollars');

} else {
    console.error('Incorrect data!')
    console.error('One value = or < than 0');
}