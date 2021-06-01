class Spell {
  constructor(name, desc) {
    this.name = name;
    this.description = desc;
    this.executionHistory = [];
  };

  execute(targets) {
    targets = [].concat(targets);
    this.executionHistory.push(...this.executionHistory, ...targets);

    const successes = this.executionHistory.reduce((acc, targ) => {
      acc.push(`Success! You've cast a spell on the ${targ}.`);

      return acc;
    }, []);
    

    return successes.join(' ');  
  };

  clearExecutionHistory() {
    this.executionHistory = [];
  }
};

module.exports = Spell;