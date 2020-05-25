// START Program - Verifica Mail
// Creo array - richiesta mail utente
var userMail = [];

// For Loop ( x 5 )
// Push per creare inserire mail successiva
for (var i = 0; i < 5; i++) {
  userMail.push(prompt('Inserisci la tua mail'));
}

// Display in console
console.log(userMail);

// Ricerca mail specifica
var lauraMail = false;

// Creo array per ricerca mail
for (var i = 0; i < userMail.length; i++) {
  if (userMail[i] === 'laura@libero.it') {
    lauraMail = true;
  }
}

// Display risultati
console.log('Valore inziale:', lauraMail);
if (lauraMail) {
  console.log('Stato indirizzo mail', lauraMail, ':in elenco');
} else {
  console.log('Stato indirizzo mail', lauraMail, ':da richiedere');
}
// END Program - Verifica Mail







// START Program - Gioco Dadi
// Creo var richiesta numero utente e pc
var userName = prompt('Inserisci il tuo nome');
console.log(userName);
var userNumber = parseInt(prompt('Inserisci un numero da 1 a 6'));
console.log(userNumber);

var pcNumber = Math.floor(Math.random()*6) +1;
console.log(pcNumber);

//Creo condizioni: user wins - pc wins - pareggio
if (userNumber > pcNumber) {
  alert('The winner is ' + userName + '!');
} else if (userNumber < pcNumber) {
  alert('Sorry ' + userName + ', you failed. Try again!');
} else if (userNumber == pcNumber){
  alert('Tie! Try again!')
}
// END Program - Gioco Dadi
