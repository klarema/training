const Tema = require('./Tema');
const Usuari = require('./Usuari');
const events = require('events');
const emitter = new events.EventEmitter();

var missatge_1 = "The weather is very bad";
var missatge_2 = "More Pokemon";
var missatge_3 = "Dont use plastic";

// Escriu una aplicació que creï diferents objectes Usuari. / Write an application that creates different user objects - create 'USER' objects 
usuari_1 = new Usuari("Karen");
usuari_2 = new Usuari("Luis");
usuari_3 = new Usuari("Michele");

// L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells. / Can create Theme. Can subscribe USERS to Theme
tema_1 = new Tema("Climate Change");
tema_2 = new Tema("Pokemon Lorem Ipsum");

const subscribeUsuari = (usuari, tema) => {
    tema.subscribers.push(usuari);
    // emitter.emit(subscribeUsuari, usuari, tema)
}
//handle a subscribe event
emitter.on(subscribeUsuari, (usuari, tema) => {
    console.log(`USUARI: ${usuari.name} has subscribed to TEMA: "${tema.name}"\n`);
});
subscribeUsuari(usuari_1, tema_2);
subscribeUsuari(usuari_2, tema_1);
subscribeUsuari(usuari_3, tema_2);

// Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. / When a User ADDS a message to a Theme, an alert is sent in the console from the Theme 
// const afegirMissatge = (usuari, missatge, tema) => {
//     tema.missatges.push(missatge);
//     emitter.emit(afegirMissatge, usuari, missatge, tema)
// }

// emitter.on(afegirMissatge, (usuari, missatge, tema) => {
//     console.log(`MESSAGE ALERT: ${usuari.name} added a message to TEMA: "${tema.name}"
//         message: ${missatge}
//         Sent to all subscribers of this tema: ${JSON.stringify(tema.subscribers)}\n`);
// });

// També ho mostraran per consola cadascun dels Usuaris que estiguin subscrits al Tema (rebran el missatge). / It will also show, throught the console, every one of the USERS who is subscribed to the topic (they receive a message ?)
// tema_1.afegirMissatge(usuari_2, missatge_3);
tema_1.getSubscribersList()
tema_2.getSubscribersList()
tema_1.afegirMissatge(usuari_2, missatge_1);

// afegirMissatge(usuari_1, missatge_2, tema_2);
// afegirMissatge(usuari_2, missatge_3, tema_1);


