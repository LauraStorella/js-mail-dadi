// START Program

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
  console.log('Stato indirizzo mail ' + lauraMail + ' : in elenco');
} else {
  console.log('Stato indirizzo mail ' + lauraMail + ' : da richiedere');
}
