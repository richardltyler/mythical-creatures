const Being = require('./being');
const Part = require('./Part');

class Ship {
  constructor({ name, type, maxCrew, odometer, fuelCapacity, fuel, captain, parts }) {
    this.name = name;
    this.type = type;
    this.maxCrew = maxCrew;
    this.odometer = odometer || 0;
    this.fuelCapacity = fuelCapacity || 10;
    this.fuel = fuel || 0;
    this.captain = captain;
    this.crew = [];
    this.cargo = [];
    this.parts = parts || {};
   
  }

  addCrew(crew) {
    crew.forEach(person => {
      const crewIsFull = (this.crew.length + 1) > this.maxCrew;
      
      if (!crewIsFull && person instanceof Being) {
        this.crew.push(person);
      };
    });
  };

  loadCargo(cargoPart) {
    if (cargoPart instanceof constructor) {
      this.cargo.push(cargoPart);
    };
  };

  updatePart(part) {
    const oldPart = this.parts[part.type];
    this.parts[part.type] = part;

    if (oldPart) {
      return oldPart.value - part.value;
    };
  };

  checkReadiness() {
    const hasParts = !!Object.keys(this.parts).length;

    this.readyToFly = !!(this.captain && this.fuel && hasParts)

    return !this.captain 
      ? 'Cannot fly without a captain' 
      : !this.fuel ? 'Cannot fly without fuel' 
      : !hasParts ? 'Cannot fly without parts'
      : 'Good to go!';
  }
}

module.exports = Ship;