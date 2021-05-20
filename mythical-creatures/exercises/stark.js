class Stark {
  constructor(arg = {}) {
    this.name = arg.name;
    this.location = arg.area || 'Winterfell';
  }
}

module.exports = Stark;