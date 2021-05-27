class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag || {};
    this.hasCandy = false;
    this.countCandies = this.bag.count;
  };

  putCandyInBag(candy) {
    this.bag.fill(candy);
    this.hasCandy = !this.bag.empty;
    this.countCandies = this.bag.count;
  };

  eat() {
    this.bag.removeCandy();
    this.countCandies = this.bag.count;
  };
};

module.exports = TrickOrTreater;