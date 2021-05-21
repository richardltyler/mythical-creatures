class Skater {
  constructor({name, skill, tricks, cash}) {
    this.name = name;
    this.skill = skill;
    this.tricks = tricks;
    this.money = cash;
    this.frustration = 0;
  }

  practice(trick) {
    !this.tricks[trick]
      && this.frustration++;

    return this.learnTrick(trick);
  };

  learnTrick(trick) {
    if (this.frustration > 2 
      && this.frustration !== 0) {

      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`;
    };
  };

  payFee(cost) {
    this.money -= cost;
  }
}

module.exports = Skater;