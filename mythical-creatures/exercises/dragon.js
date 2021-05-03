class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.mealsCount = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.mealsCount++;

    if (this.mealsCount > 2) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;