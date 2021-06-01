class Cabinet {
  constructor() {
    this.potions = [];
  };

  isEmpty() {
    return !this.potions.length;
  }

  add(potion) {
    const potions = [].concat(potion)
    this.potions = [...this.potions, ...potions]
  };

  takeFirstPotion() {
    return this.potions.shift()
  };

  takePotionWithName(potion) {
    const removed = this.potions.find(pot => pot.name === potion);
    this.potions = this.potions.filter(pot => pot !== removed);

    return removed;
  };

  count(potion) {
    return this.potions.reduce((acc, pot) => {
      pot.name === potion 
        && acc++;

      return acc;
    }, 0)
  }
};

module.exports = Cabinet;