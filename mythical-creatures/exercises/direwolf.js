const Stark = require('./Stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      stark.beProtected();
      this.starksToProtect.push(stark);
      this.huntsWhiteWalkers = false;
    }
  }

  leave(starkToLeave) {
    this.starksToProtect = this.starksToProtect.filter(stark => stark !== starkToLeave);

    starkToLeave.safe = false;
  }
}

module.exports = Direwolf;