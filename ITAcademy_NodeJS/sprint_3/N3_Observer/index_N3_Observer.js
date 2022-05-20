var Tema = require('./Tema');
var Usuari = require('./Usuari');

// crear diferents Temes, add listeners. 
var climateChange = new Tema("Climate Change");
climateChange.emitter.on('newMessage', function() {
    console.log(`New message added to ${climateChange.name}`)
    climateChange.subscribers.forEach(subscriber => subscriber.notify());
});
var PokemonLoremIpsum = new Tema("Pokemon Lorem Ipsum");
PokemonLoremIpsum.emitter.on('newMessage', function() {
    console.log(`New message added to ${PokemonLoremIpsum.name}`)
    PokemonLoremIpsum.subscribers.forEach(subscriber => subscriber.notify());
});

// objectes Usuari
var karen = new Usuari("Karen");
var luis = new Usuari("Luis");
var michelle = new Usuari("Michelle");

// subscribe usuari to tema
climateChange.addSubscriber(karen);
climateChange.addSubscriber(luis);
PokemonLoremIpsum.addSubscriber(michelle);

// missatges
var missatge_1 = "The weather is very bad";
var missatge_2 = "More Pokemon";
var missatge_3 = "Dont use plastic";

// add messages, and trigger events
console.log("\nAdd new message to Tema: Climate-Change, triggers events:")
climateChange.afegirMissatge(missatge_1);
console.log("\nAdd new message to Tema: Pokemon-Lorem-Ipsum, triggers events:")
PokemonLoremIpsum.afegirMissatge(missatge_2);
console.log("\nAdd new message to Tema: Climate-Change, triggers events:")
climateChange.afegirMissatge(missatge_3);

// test
// console.log("Temas Subscribers + Tema messages:");
// console.log(climateChange.missatges);
// console.log(climateChange.subscribers);
// console.log(PokemonLoremIpsum.missatges);
// console.log(PokemonLoremIpsum.subscribers);


