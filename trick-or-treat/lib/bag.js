class Bag {
  constructor() {
    this.empty = true;
    this.candies = [];
    this.count = 0;
  };

  fill(candy) {
    this.candies.push(candy);
    this.empty = false;
    this.count++;
  };

  contains(candyType) {
    return this.candies.some(candy => candy.type === candyType);
  };

  removeCandy() {
    this.count--;
    this.candies.shift();
    this.empty = !!this.candies ? false : true;
  };
};

module.exports = Bag;