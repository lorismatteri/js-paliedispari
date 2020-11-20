//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var pariDispari = prompt("Pari o dispari?");

var userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

console.log(pariDispari);
console.log(userNumber);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min) ) + min;
}

var numberPc = Number(randomNumber(1, 5));

console.log(numberPc);

//Sommiamo i due numeri

var somma = numberPc + userNumber;

console.log(somma);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pari(number) {
    if(number % 2 === 0) {
        return true;
    }
}

if(pari(somma)){
    console.log("pari");
} else {
    console.log("dispari");
}

//Dichiariamo chi ha vinto.

if (pariDispari === "pari" && pari(somma) === true) {
    console.log("Hai vinto!");
} else if (pariDispari === "dispari" && pari(somma) === false) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso :(");
}
