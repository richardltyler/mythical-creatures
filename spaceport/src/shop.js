const Part = require('./part');

class Shop {
  constructor({ name }) {
    this.name = name;
    this.inventory = {};
  }

  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.name] = part;
    };
  };

  outfitShip(ship, partName) {
    const part = this.findPart(partName)

    if (ship.captain && ship.captain.credits >= part.value) {
      this.chargeCaptain(ship.captain, part.value)
      ship.loadCargo(part);
      ship.updatePart(part)
      return `${partName} added to ship`

    } else if (ship.captain && ship.captain.credits < part.value) {
      const diff = part.value - ship.captain.credits;
      return `you require ${diff} more credits to make this purchase`;

    } else {
      return `cannot outfit a ship without a captian`;
    }
  }

  findPart(partType) {
    for (const part in this.inventory) {
      if (this.inventory[part].type === partType) {
        return this.inventory[part];
      };
    };
  };

  chargeCaptain(captain, value) {
    captain.credits -= value;
  };
};

module.exports = Shop;