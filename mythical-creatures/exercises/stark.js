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
    const direwolf = new Direwolf(wolf, location);
    direwolf.home = this.location;
    direwolf.protect(this)
    return direwolf;
    // This looks a bit clunky, but it follows the test
    // Logically, IRL (well like in Westoros life), a Stark would call for their direwolf who would be in another location and then the direwold would have to make it to the stark's location
    // It can almost make sense to instantiate the Direwolf with a different location and then have to call it's location to whatever the Stark's location is
    // here's how I would do it without this logic and the tests to throw me off a lil:
    // const direwolf = new Direwolf(wolf, this.location);
    // direwolf.protect(this)
    // return direwolf;
  }
}

module.exports = Stark;