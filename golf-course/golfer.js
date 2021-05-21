class Golfer {
  constructor({ name, handicap }) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${this.handicap + par} on average.`;
  }

  playRound({ difficulty }) {
    difficulty === 'hard' ? this.frustration += 500
      : this.frustration += 100;
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel({ features }) {
    const featuresStr = features.join(' and ');

    return `I love the ${featuresStr} on this course!`;
  }

  whatYaShoot(score) {
    if(score > 0) {
      this.frustration += 20;
      return 'Doh!';
    }
    
    if (score  === 0) {
      this.frustration -= 10;
      return 'Booyah!';
    }

    if (score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }

}

module.exports = Golfer;
