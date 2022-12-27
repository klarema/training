// Nivell 1 - Exercici 1:
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres
console.log(
  (() => {
    let num1 = 10;
    let num2 = 5;
    let sumDosNombres = num1 + num2;
    return sumDosNombres;
  })()
);

// Nivell 2 - Exercici 1:
// una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut
let myfunction = (arg1) => {
  let object1 = {};
  object1.name = arg1;
  return object1;
};
console.log(`N2 Ex1 - objecte.atribut valor: ${myfunction("Tomas").name}`);

// Nivell 2 - Exercici 2:
// una classe Persona que rebi un paràmetre 'nom' al ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe
class PersonaA {
  constructor(nom) {
    this.nom = nom;
  }
  dirNom() {
    console.log(this.nom);
  }
}
const persona1 = new PersonaA("Laura");
persona1.dirNom();

// Nivell 3 - Exercici 1:
// una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions
// an abstract class
function Calzado() {
  this.material = "material";
  this.tacon = "tacon";
  throw new Error("Calzado is an Abstract Class. Cannot be instantiated. ");
}
// Calzado.prototype.madeOf = function () {
//   return "Made of: " + this.material;
// };
// Calzado.prototype.taconType = function () {
//   return "Tacon type: " + this.tacon;
// };

// a function that creates instances of the abstract class
function createCalzado(material, tacon) {
  let newInstance = Object.create(Calzado.prototype);
  newInstance.madeOf = material;
  newInstance.taconType = tacon;
  return newInstance;
}

// instanciate the abstract class Calzado will throw error
// var notAllowed = new Calzado();

// create instances of the abstract class with different definitions
var botas = createCalzado("leather", "alto");
console.log(botas instanceof Calzado); // should be true
console.log(botas.madeOf);
console.log(botas.taconType);

var sneakers = createCalzado("synthetic", "bajo");
console.log(sneakers instanceof Calzado); // should be true
console.log(sneakers.madeOf);
console.log(sneakers.taconType);
