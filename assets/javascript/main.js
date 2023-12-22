//PART ABOUT THE INITATION OF THE VARIABLES 
let kilometresDone= prompt("Inserire il N° di chilometri da percorrere:");
let agePerson= prompt("Inserire l'età del passeggero:");
const priceBus= 0.21



//PART ABOUT THE CONSOLE.LOG

console.log("N° di chilometri da percorrere:", kilometresDone);
console.log("Età del passeggero:", agePerson);

//PART ABOUT THE CONDITIONAL

if (agePerson < 18) {
    document.writeln(`<p> Il prezzo del biglietto è di: <strong>${0.21*kilometresDone*20/100}€</strong></p>`); 

} else if (agePerson==18) {
    document.writeln(`<p> Il prezzo del biglietto è di: <strong>${0.21*kilometresDone}€</strong></p>`);

} else if ( agePerson > 18 && agePerson < 65) {
    document.writeln(`<p> Il prezzo del biglietto è di: <strong>${0.21*kilometresDone}€</strong></p>`);

} else if (agePerson==65) {
    document.writeln(`<p> Il prezzo del biglietto è di: <strong>${0.21*kilometresDone}€</strong></p>`);

} else if (agePerson > 65) {
    document.writeln(`<p> Il prezzo del biglietto è di: <strong>${0.21*kilometresDone*40/100}€</strong></p>`);
}