class Ogre {
  constructor({name, abode}) {
    this.name = name;
    this.home = abode || 'Swamp';
    this.swings = 0;
  };

  encounter(human) {
    human.beEncountered(this);
  }

  swingAt(human) {
    this.swings++

    this.swings % 2 === 0 
    && this.swings > 0
    && (human.knockedOut = true);
  }

  apologize(human) {
    human.knockedOut = false;
  }
};

module.exports = Ogre;