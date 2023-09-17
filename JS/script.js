
// PALINDROMA

const outputPali = document.querySelector('.pali-output');

// 1.
let parolaUtente = prompt('inserisci una parola palindroma');

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
//verifico se le due stringhe sono uguali o meno
if (parolaUtente == parolaReverseString) {
  const risultato = 'la parola inserita è palindroma ✅';
  outputPali.innerHTML = risultato
  // console.log('la parola inserita è palindroma');
} else {
  const risultato = 'la parola inserita non è palindroma ❌'
  outputPali.innerHTML = risultato
  // console.log('la parola inserita non è palindroma')
}


