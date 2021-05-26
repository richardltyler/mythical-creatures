var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, hasTicket) {
    if (this.skiers.length < this.limit && hasTicket) {
      const skier = new Skier(name, hasTicket);

      this.skiers.push(skier);
    } else if (hasTicket) {
      return `Sorry, ${name}. Please wait for the next lift!`;
    } else {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
    
    
  }
  startLift() {
    if (this.skiers.length >= this.limit) {
      this.safetyBar = 'down';
      
    } else {
      const remainder = this.limit - this.skiers.length;

      return remainder === 1 ? `We still need ${remainder} more skier!` : `We still need ${remainder} more skiers!`;
    }
  }
}

module.exports = Lift;