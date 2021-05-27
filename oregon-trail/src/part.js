class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.quality = 2;
  }

  break() {
    this.broken = true;
    this.quality--;
  }

  repair() {
    if (this.quality > 0) {
      this.broken = false;

    } else {
      
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    }
  }
}

module.exports = Part;
