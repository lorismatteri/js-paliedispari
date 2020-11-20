//Chiedere all’utente di inserire una parola

var userWord = prompt("Inserisci una parola");

console.log(userWord);

//Creare una funzione per capire se la parola inserita è palindroma

function palindroma (word) {
    return word == word.split("").reverse().join("");
}

console.log(palindroma(userWord));

if (palindroma(userWord) == true) {
    console.log("La parola è palindorma");
} else {
    console.log("La parola non è palindorma");
}