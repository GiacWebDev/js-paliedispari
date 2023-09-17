
// PALINDROMA

const outputPali = document.querySelector('.pali-output');

// 1.
const parolaUtente = prompt('inserisci una parola palindroma');

// 2.
// splitto tutte le lettere della parola inserita con split.
const lettereParola = parolaUtente.split("");
console.log(lettereParola);
// creo varibile per salvare la parola con le lettere inverse
const parolaReverse = (lettereParola.reverse());
console.log(parolaReverse);

//3
// converto le lettere inverse in una stringa
const parolaReverseString = parolaReverse.join("");
console.log(parolaReverseString);

// 4.
// verifico se le due stringhe sono uguali o meno
if (parolaUtente == parolaReverseString) {
  const risultato = 'la parola inserita è palindroma ✅';
  // 5.
  // stampo in pagina
  outputPali.innerHTML = risultato
  // console.log('la parola inserita è palindroma');
} else {
  const risultato = 'la parola inserita non è palindroma ❌'
  outputPali.innerHTML = risultato
  // console.log('la parola inserita non è palindroma')
}

// ####################################################################################


// PARI E DISPARI

const paridispariEl = document.querySelector('.paridispari')

// 3.
// Funzione per generare un numero random da 1 a 5 per il computer
function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}

// 5.
// Funzione per verificare se un numero è pari o dispari
function isPari(numero) {
  return numero % 2 === 0;
}

// 1/2.
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
const sceltaUtente = prompt('Scegli pari o dispari:');
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5:'), 10);
console.log(sceltaUtente, numeroUtente)

// 3.
// Generiamo un numero casuale per il computer (da metter dentro una funzione in alto)
const numeroComputer = generaNumeroCasuale();
console.log(`numero computer -----> ${numeroComputer}`)

// 4.
// Sommiamo i due numeri
const somma = numeroUtente + numeroComputer;

// 5.
// Stabiliamo se la somma dei due numeri è pari o dispari (da metter dentro una funzione in alto)
const risultato = isPari(somma) ? 'pari' : 'dispari';

// 6/7.
// Dichiarare il vincitore
if (risultato === sceltaUtente) {
  // 8.
  // stampare in pagina il risultato
  const messaggio = `Hai vinto! La somma (${somma}) è ${risultato}.`
  paridispariEl.innerHTML = messaggio
  // console.log(`Hai vinto! La somma (${somma}) è ${risultato}.`);
  
} else {
  const messaggio = `Il computer ha vinto! La somma (${somma}) è ${risultato}.`
  paridispariEl.innerHTML = messaggio
  // console.log(`Il computer ha vinto! La somma (${somma}) è ${risultato}.`);
}




