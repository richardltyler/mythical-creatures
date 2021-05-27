class Wagon {
  constructor({ name, wheels, axles, oxen, yokes, food, ammunition, clothes, settlers }) {
    this.title = name;
    this.wheels = wheels || [];
    this.axles = axles || [];
    this.oxen = oxen || [];
    this.yokes = yokes || [];
    this.food = food;
    this.ammunition = ammunition;
    this.clothes = clothes;
    this.settlers = settlers || [];
  };

  addPart(part) {
    const partType = this.getPartType(part);

    this[partType].push(part);
  };

  canTravel() {
    return this.wheels.length > 3
      && this.axles.length > 1
      && this.oxen.length > 1
      && this.yokes.length > 0
      && this.settlers.length > 0
      && this.checkForBreak('wheels')
      && this.checkForBreak('axles')
      && this.checkForBreak('oxen')
      && this.checkForBreak('yokes')
      && this.yokes.length >= (this.oxen.length / 2)
      && this.checkForLivingSettler();
  }

  checkForBreak(part) {
    return this[part].every(wheel => !wheel.broken);
  };

  getPartType(part) {
    return part.type === 'ox' ? 'oxen': `${part.type}s`;
  };

  checkForLivingSettler() {
    return this.settlers.some(settler => settler.status !== 'dead');
  };
};

module.exports = Wagon;