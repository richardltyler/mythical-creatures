class LunchBox {
  constructor({ owner, madeOf, shape, color}) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.snacks = [];
  };

  acquireSnack(snack) {
    snack.isInLunchBox = true;
    this.snacks.push(snack);
  };

  findHealthySnacks() {
    return this.snacks.reduce((acc, snack) => {
      !!snack.checkForHealthy()
        && acc.push(snack.type);
      
      return acc;
    }, []);
  };
};

module.exports = LunchBox;
