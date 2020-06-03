// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

//creo un array di 16 numeri random compresi fra 1 e 100
var arrayNumCasuali = [];

for (var i = 0; i < 16; i++) {

  arrayNumCasuali.push(fromUpTo(1, 100));

}

console.log(arrayNumCasuali);







//questa funzione genera un numero casuale compreso tra due valori (estremi inclusi)
function fromUpTo(min, max) { //note: riutilizzabile quando vorrò aumentare la difficoltà del gioco

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
