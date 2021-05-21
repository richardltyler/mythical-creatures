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

  admit(skater) {
    if (this.occupants.length > 2) {
      return 'Sorry, we are at max capacity. Thank you for understanding.';
    };

    if (skater.money < this.cost) {
      return `Sorry, you don't have enough money.`;
    };

    this.occupants.push(skater);

    if (this.isPrivate) {
      skater.payFee(this.cost);
      return `Welcome to Curbside, the cost will be $${this.cost}.00.` ;
    };

    return `Welcome to the free ${this.name} Skatepark!`;
  };
};

module.exports = SkatePark;