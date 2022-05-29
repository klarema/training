// variables
let nomUsuari = "John";
let cognomUsuari = "Wayne";

// Nivell 1 - Exercici 1:
// una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre
function showName(nom) {
  console.log("(N1Ex1) Nom: ", nom);
}
showName(nomUsuari);

// Nivell 2 - Exercici 1:
// el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge
console.log(`(N2Ex1) Nom i cognom: ${nomUsuari} ${cognomUsuari}`);

// Nivell 2 - Exercici 2:
// Invoca una funció que retorni un valor des de dins d'una template literal.
// S'ha de cridar(call) una funció des de dins d'un template literal
function dateValue() {
  return (date = new Date().toString());
}
tempLit = `(N2Ex2)Cridar una funció des de dins d'un template literal: ${dateValue()}`;
console.log(tempLit);

// Nivell 3 - Exercici 1:
// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
function myCountFunction() {
  let numbers = " ";
  for (let x = 0; x <= 9; x++) {
    numbers += x;
  }
  console.log(numbers);
}
function addFunctionsAndDisplay() {
  myNewArray = [];
  for (let x = 0; x <= 9; x++) {
    myNewArray.push(myCountFunction);
  }
  for (let y in myNewArray) {
    myNewArray[y]();
  }
}
addFunctionsAndDisplay();

// Nivell 3 - Exercici 2:
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.
const displayName = (function (nomUsuari) {
  console.log(`(N3Ex2) Funció anònima, autoinvocada: ${nomUsuari}`);
})(nomUsuari);
