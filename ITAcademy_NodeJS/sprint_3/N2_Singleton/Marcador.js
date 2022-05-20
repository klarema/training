class Marcador {
    constructor() {
        this.games = [];
        this.title = "\n ----- * MARCADOR * ----- "
    }

    getWinner(gameObj){
        let highestScore = 0;
        let guanyador = "None";

        for (let pl in gameObj.players){ 
            if(gameObj.players[pl].score > highestScore){
                highestScore = gameObj.players[pl].score;
                guanyador = gameObj.players[pl];
            }
        }
        if(highestScore > 0)
        return `${guanyador.name} (${guanyador.score})`;
        else return "No scores yet"
    } 

    display(){
        console.log(this.title)
        for (let i = 0; i < this.games.length; i++){
            console.log(`\nJOC: >>${this.games[i].name}<< \n**  Guanyador: ${this.getWinner(this.games[i])}  **`)
            for (let pl in this.games[i].players){
                console.log(`${this.games[i].players[pl].name}: ${this.games[i].players[pl].score}`)
            }
        }
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Marcador();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
}
module.exports = Singleton;