var Tema = require("./Tema");
var Usuari = require("./Usuari");

// crear diferents Temes, add listeners.
var climateChange = new Tema("Climate Change");
var pokemonLoremIpsum = new Tema("Pokemon Lorem Ipsum");

// objectes Usuari
var karen = new Usuari("Karen");
var luis = new Usuari("Luis");
var michelle = new Usuari("Michelle");

// subscribe usuari to tema
climateChange.addSubscriber(karen);
climateChange.addSubscriber(luis);
pokemonLoremIpsum.addSubscriber(michelle);

// missatges
var missatge_1 = "The weather is very bad";
var missatge_2 = "More Pokemon";
var missatge_3 = "Dont use plastic";

// add messages, and trigger events
climateChange.afegirMissatge(missatge_1);
pokemonLoremIpsum.afegirMissatge(missatge_2);
climateChange.afegirMissatge(missatge_3);
