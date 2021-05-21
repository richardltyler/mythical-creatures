class SkatePark {
  constructor({name, year, type, features, isPrivate, price}) {
    this.name = name;
    this.yearFounded = year;
    this.style = type;
    this.features = features;
    this.isPrivate = isPrivate || false;
    this.cost = price || 0;
    this.occupants = [];
  }
}

module.exports = SkatePark;