var amqp = require("amqplib/callback_api");

// connect to rabbitmq server localhost 156
amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  // create a channel
  connection.createChannel(function (error1, channel) {
    // declare a queue to send to and then send/publish a message. message is a byte array
    if (error1) {
      throw error1;
    }
    var queue = "hello";
    var msg = "Hello world";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);

    // close connect and exit
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  });
});
// declare a queue to send to, will publish messages to this queue

// Nivell 3 - Publisher - Subscriber
// Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber.
// Mostra l'emissió i recepció de cada missatge en consoles diferents
