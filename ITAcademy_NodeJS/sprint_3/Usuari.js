
class Usuari {
    constructor(name) {
        this.name = name;
    }
    notify(){
        console.log(`Hi ${this.name}, new message alert! `);
        // include the tema name?
    }
}
module.exports = Usuari;