const EventEmitter = require('events')
// const emitter = new EventEmitter()

class Tema extends EventEmitter {
// class Tema {
    constructor(name) {
        super()
        this.name = name;
        this.subscribers = [];
        this.missatges = [];
        this.emitter = new EventEmitter()
    }

    addSubscriber(newSubscriber) {
        this.subscribers.push(newSubscriber);
    }

    afegirMissatge(missatge){
        this.missatges.push(missatge);
        this.emitter.emit('newMessage')
    }

    // newMessage(){
    //     console.log(`New message added to ${this.name}`)
    // }

    // notifyAllSubscribers(){     
    //     emitter.on("new-message", (missatge) => {
    //     // console.log("send the message to all subscribers")
    //     this.subscribers.forEach(subscriber => subscriber.notify(missatge))
    //     })
    // }
}

module.exports = Tema;