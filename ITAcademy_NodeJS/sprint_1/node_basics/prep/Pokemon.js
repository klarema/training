class Pokemon {
  constructor(id, name, type, attack) {
    this.id = id;
    this.name = name;
    this.level = 1;
    this.type = type;
    this.attacks = attack;
  }

  incrementLevel(inc) {
    this.level = this.level + inc;
    // return level;
  }
  getPotentes() {
    console.log(`PK name: "${this.name}" has Powers: `);
    for (let x in this.attacks) {
      console.log(this.attacks[x].potente);
    }
  }
}

module.exports = Pokemon;
