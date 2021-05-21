class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  };

  collectRiddle(riddle) {
    this.riddles.length > 2
      && this.riddles.shift();
    
    this.riddles.push(riddle);
  }

  attemptAnswer(answer) {
    const startingRiddles = this.riddles;
    this.riddles = startingRiddles.filter(riddle => riddle.answer !== answer);

    return startingRiddles.length !== this.riddles.length ? this.respondToAnswer(answer) 
      : this.heroesEaten++;
  };

  respondToAnswer(answer) {
    return this.riddles.length > 0 ? 'That wasn\'t that hard, I bet you don\'t get the next one' 
      : `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`;
  }
}

module.exports = Sphinx;