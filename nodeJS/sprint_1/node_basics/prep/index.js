const Pokemon = require("./Pokemon");

//types -  array of strings
var types = ["fire", "agua", "planta", "electric"];

//attacks - array of objects
var attacks = [
  { name: "attack1", potente: "potente_1" },
  { name: "attack2", potente: "potente_2" },
  { name: "attack3", potente: "potente_3" },
  { name: "attack4", potente: "potente_4" },
  { name: "attack5", potente: "potente_5" },
];

let myPokemons = [];

let Pk1 = new Pokemon(1, "one", types[1], [attacks[0], attacks[4]]);
myPokemons.push(Pk1);
let Pk2 = new Pokemon(2, "two", types[2], [attacks[3]]);
myPokemons.push(Pk2);
let Pk3 = new Pokemon(3, "three", types[3], [attacks[1], attacks[2]]);
myPokemons.push(Pk3);
let Pk4 = new Pokemon(4, "four", types[0], [attacks[3]]);
myPokemons.push(Pk4);
let Pk5 = new Pokemon(5, "five", types[1], [attacks[3], attacks[1]]);
myPokemons.push(Pk5);
let Pk6 = new Pokemon(6, "six", types[2], [attacks[1], attacks[4], attacks[3]]);
myPokemons.push(Pk6);

// tests
// console.log(myPokemons);

// get all PKs of type "electric"
for (let x in myPokemons) {
  if (myPokemons[x].type === "electric") console.log(myPokemons[x].name);
}

// increment PK if type "agua"
for (let x in myPokemons) {
  if (myPokemons[x].type === "agua") {
    myPokemons[x].incrementLevel(2);
    console.log(
      `Incremented x 2 = ${myPokemons[x].level}, for PK: ${myPokemons[x].name}`
    );
  }
}

// list powers for each PK
for (let x in myPokemons) {
  myPokemons[x].getPotentes();
}
