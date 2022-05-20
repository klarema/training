var Marcador = require('./Marcador');
var Jugador = require('./Jugador');
var Joc = require('./Joc');

// La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.
var marcador = new Marcador().getInstance();
// Construeix una aplicació que creï diversos Jugadors. / An app that creates Players
var player1 = new Jugador('Maria');
var player2 = new Jugador('Juan');
var player3 = new Jugador('Ana');
var player4 = new Jugador('Gilda');
var player5 = new Jugador('Guillem');
// Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador / Can add players to a Game, Game will show a scoreboard with points and the winner
var joc_1 = new Joc('SUPER-SKI-2050'); 
joc_1.addPlayer(player4);
joc_1.addPlayer(player2);
joc_1.addPlayer(player3);
var joc_2 = new Joc('RACE-GAME'); 
joc_2.addPlayer(player1);
joc_2.addPlayer(player5);
var joc_3 = new Joc('RUN'); 
// L'aplicació ha de poder afegir o treure punts a cada jugador perquè el marcador canviï / Can add and remove points for each player so that the scoreboard can change/update 
player2.addPoints(100);
player2.deductPoints(30);
player1.addPoints(100);
player1.addPoints(100);
player5.addPoints(140);
player3.addPoints(75);
player1.deductPoints(50);

// test
// console.log(marcador.games[0]);
// console.log(marcador.games[1]);
marcador.display();



