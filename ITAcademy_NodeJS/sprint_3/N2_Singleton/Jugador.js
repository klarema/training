var Marcador = require('./Marcador');
var marcador = new Marcador().getInstance();

class Jugador {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    // add a score 
    addPoints(points){
        this.score = this.score + points
    }
    // deduct score
    deductPoints(points){
        this.score = this.score - points
    }
}
module.exports = Jugador;