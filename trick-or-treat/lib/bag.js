class Bag {
  constructor() {
    this.empty = true;
    this.candies = [];
    this.count = 0;
  };

  fill(candy) {
    this.candies.push(candy);
    this.count++;
  };

  contains(candyType) {
    return this.candies.some(candy => candy.type === candyType);
  };
};

module.exports = Bag;