const events = require('events');
const emitter = new events.EventEmitter();

class Tema {
    constructor(name) {
        this.name = name;
        this.missatges = [];
        this.subscribers = [];
        this.emitter = emitter.emit(this.afegirMissatge)
        // emitter.on(this.afegirMissatge, () => {
        //     console.log(
        //     `NEW MESSAGE ALERT: on TEMA: "${this.name}"
        //     Sent to all subscribers of this tema: ${this.getSubscribers()} `);
        // })
        emitter.on(this.afegirMissatge, () => {
            this.alertMessage();
        })
        
    }

    afegirMissatge (usuari, missatge){
        this.missatges.push(missatge);
        // make missatges an object with user and message?
    }

    getSubscribersList(){
        this.subscribers.forEach(subscriber => {
            console.log(subscriber.name)
        });
    }

    alertMessage(){
        console.log(
            `NEW MESSAGE ALERT: on TEMA: "${this.name}"
            Sent to all subscribers of this tema: 
                ${this.getSubscribersList()} `);
        }
}
// 
module.exports = Tema;