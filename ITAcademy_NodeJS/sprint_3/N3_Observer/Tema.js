const EventEmitter = require("events");

class Tema extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
    this.subscribers = [];
    this.missatges = [];
    this.emitter = new EventEmitter();
  }

  addSubscriber(newSubscriber) {
    this.subscribers.push(newSubscriber);
  }

  afegirMissatge(missatge) {
    this.missatges.push(missatge);
    this.emitter.emit("newMessage", this.notifyAllSubscribers());
  }

  notifyAllSubscribers() {
    console.log(`Notify all subscribers to ${this.name}.`);
    this.subscribers.forEach((subscriber) => subscriber.notify());
  }
}

module.exports = Tema;
