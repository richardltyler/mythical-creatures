class Centaur {
  constructor({name, type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actions = 0;
  }

  shootBow() {
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      this.actions++;
      this.getCranky();
      return 'Twang!!!';
    }
  }

  run() {
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      this.actions++;
      this.getCranky();
      return 'Clop clop clop clop!!!';
    }
  }

  getCranky() {
    this.cranky = this.actions > 2;
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;