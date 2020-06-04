// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

//INIZIO FUNZIONI\\
//questa funzione genera un numero casuale compreso tra due valori (estremi inclusi)
function fromUpTo(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
//\

//questa funzione crea un array di 16 mine in cui ogni mina è un numero univoco da 1 a 100)
function creaArrayMine() {

  ///array da riempire
  var numeriMine = [];

  ///loop finché array non è riempito
  while (numeriMine.length < 16) {

    ////criteri per riempire:
    ////- numero casuale da 1 a 100
    var numCasuale = fromUpTo(1, 100);

    ////- solo se non è già presente nell' array
    if ( checkDoppi(numCasuale, numeriMine) === false ) {

      /////metodo per riempire
      numeriMine.push(numCasuale);

    }

  }

  ///ritorno array riempito
  console.log(numeriMine);
  return numeriMine;

}
//\

//questa funzione controlla se un elemento è già presente in un array,
//è simile a .includes()
//ritorna un booleano: true = giappresente
///////////////////////false = nompresente
function checkDoppi(elementoDaVerificare, listaDaVagliare) {

  //variabile di appoggio
  var inArray = false;

  //loop per tutta la lunghezza della lista
  for (var i = 0; i < listaDaVagliare.length; i++) {

    //se l'elemento da verificare è uguale a uno di quelli già presenti in lista
    if (elementoDaVerificare === listaDaVagliare[i]) {

      //allora l'elemento è già presente
      inArray = true;

    }

  }

  console.log(inArray);
  return inArray;

}
//\
//\\FINE FUNZIONI//


//GIOCO CAMPO MINATO
var arrayMine = creaArrayMine();
var numeroImmissioniUtente = 0;
var isMina = false;

while ( (isMina === false) && (numeroImmissioniUtente < 84) ) {

  var numUtente = parseInt(prompt("scegli un numero da 1 a 100"));

  if(checkDoppi(numUtente, arrayMine)) {

    isMina = true;

  }

  numeroImmissioniUtente++;

  console.log("hai scelto " + numUtente);

}

if(isMina === false) {

  console.log("vittoria!");

} else {

  console.log("boom!" + " il " + numUtente + " era una mina!");
  console.log( "hai perso... " + "il tuo punteggio è " + parseInt((numeroImmissioniUtente - 1)) );

}
