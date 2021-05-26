class Planet {
  constructor({ name, shop, coordinates }) {
    this.name = name;
    this.shop = shop;
    this.coordinates = coordinates;
  }

  landShip(ship) {
    this.currentShip = ship;
  }

  calculateDistance(otherPlanet) {
    const thisPlanet = this.coordinates;
    otherPlanet = otherPlanet.coordinates;

    const xDistance = (otherPlanet['x'] - thisPlanet['x']);
    const yDistance = (otherPlanet['y'] - thisPlanet['y']);
    const zDistance = (otherPlanet['z'] - thisPlanet['z']);

    const distance = 
      Math.pow(xDistance, 2) 
      + Math.pow(yDistance, 2) 
      + Math.pow(zDistance, 2);

    return Math.sqrt(distance)
  };

  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }

  giveClearance(otherPlanet) {
    if (this.currentShip.fuel === 0) {
      return 'Clearance denied: Cannot fly without fuel';

    } else {
      this.sendShip(otherPlanet);
      return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`
    };
  };

  sendShip(otherPlanet) {
    otherPlanet.currentShip = this.currentShip;
    otherPlanet.currentShip.fuel = 0;
    this.currentShip = undefined;
  }
}

module.exports = Planet;