const Stark = require('./Stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
  }

  protect(stark) {
    this.starksToProtect.push(stark);
  }
}

module.exports = Direwolf;