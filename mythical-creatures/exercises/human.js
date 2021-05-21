class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  beEncountered(ogre) {
    this.encounterCounter++;

    const count = this.encounterCounter;

    count % 3 === 0 
    && count > 0 
    && ogre.swingAt(this);
  }

  noticesOgre() {
    const count = this.encounterCounter;
    
    return count % 3 === 0 && count > 0;
  }

}

module.exports = Human;