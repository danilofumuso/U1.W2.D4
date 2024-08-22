/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log("Area Rettangolo", area(2, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
  if (a !== b) {
    return a + b;
  } else {
    return (a + b) * 3;
  }
}
console.log("CrazySum con attributi diversi", crazySum(2, 3));
console.log("CrazySum con attributi uguali", crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b = 19) {
  if (a <= b) {
    return Math.abs(a - b);
  } else {
    return Math.abs((a - b) * 3);
  }
}

console.log("CrazyDiff con a<=b", crazyDiff(12));
console.log("CrazyDiff con a>b", crazyDiff(21));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log("n=400", boundary(400));
console.log("n=75", boundary(75));
console.log("n=283", boundary(283));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(a) {
  if (a.startsWith("EPICODE")) {
    return a;
  } else {
    return "EPICODE " + a;
  }
}
console.log("CASO 1", epify("is the best school!"));
console.log("CASO 2", epify("EPICODE is cool"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(a) {
  if ((a > 0 && a % 3 === 0) || (a > 0 && a % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log("multiplo di 3?", check3and7(21));
console.log("multiplo di 3?", check3and7(22));
console.log("multiplo di 7?", check3and7(35));
console.log("multiplo di 7?", check3and7(-35));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(a) {
  return a.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(a) {}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(a) {
  return a.slice(1, -1);
}
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n 
 e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  const randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
}

console.log(giveMeRandom(50));
console.log(giveMeRandom(2));
