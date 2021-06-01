class Potion {
  constructor(name, rareness) {
    this.name = name;
    this.rareness = rareness || 0;
  };

  isRare() {
    return this.rareness > 7 ? true : false;
  }
};

module.exports = Potion;