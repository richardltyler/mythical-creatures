class Part {
  constructor({ name, type, value }) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.broken = false;
    this.checkForValidity = !this.name 
      ? 'This part needs a name!' 
      : !this.type ? 'This part needs a type!'
      : !this.value ? 'This part needs a value!' 
      : true;
    this.isValid = !!(this.name && this.type && this.value);
  }
}

module.exports = Part;