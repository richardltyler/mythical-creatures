class Settler {
  constructor({ name, age, nationality }) {
    this.name = name;
    this.age = age;
    this.nationality = nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  };

  experienceDistress(ailment) {
    if (this.status !== 'dead') {
      this.ailments.push(ailment);
      const ailments = this.ailments.length;
      this.status = 
        ailments === 1 ? 'fair' 
          : ailments === 2 ? 'poor'
          : ailments === 3 ? 'dead'
          : 'healthy';
    };
  };

  heal() {
    if (this.status !== 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return 'Sorry, we can\'t heal a corpse. Will needs a proper burial!';
    }

  }
};

module.exports = Settler;