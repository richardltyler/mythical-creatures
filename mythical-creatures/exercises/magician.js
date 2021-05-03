class Magician {
  constructor({name, assistant, clothing}) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    this.favoriteAccessory = clothing || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(magicWord) {
    return `${magicWord.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage += 10;

    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }
  }
}

module.exports = Magician;