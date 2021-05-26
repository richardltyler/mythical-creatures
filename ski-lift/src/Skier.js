class Skier {
  constructor(name, hasTicket) {
    this.name = name;
    this.hasLiftTicket = hasTicket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  };


  takeLesson() {
    this.skillLevel++;
  };

  pickSlope() {
    if (this.skillLevel > 4) {
      this.nextSlope = 'black diamond';

    } else if (this.skillLevel > 2) {
      this.nextSlope = 'blue square';
    };
  };
}

module.exports = Skier;