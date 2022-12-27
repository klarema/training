var Marcador = require('./Marcador');
var marcador = new Marcador().getInstance();

class Joc {
    constructor(name) {
        this.name = name;
        this.players = [];
        marcador.games.push(this);
    }
    // add a player to a game
    addPlayer(player){
        this.players.push(player)
    }

}
module.exports = Joc;