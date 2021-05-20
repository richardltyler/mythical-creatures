const Direwolf = require('./direwolf');

class Stark {
  constructor(arg = {}) {
    this.name = arg.name;
    this.location = arg.area || 'Winterfell';
    this.safe = false;
    this.houseWords = 'Winter is Coming';
  }

  sayHouseWords() {
    return this.houseWords;
  }

  beProtected() {
    this.safe = true;
    this.houseWords = 'The North Remembers';
    this.sayHouseWords();
  }

  callDirewolf(wolf, location) {
    const direwolf = new Direwolf(wolf, this.location);
    direwolf.protect(this)
    
    return direwolf;
  }
}

module.exports = Stark;