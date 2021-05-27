class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  };

  checkForValidity() {
    const validTypes = [
      'food', 
      'ammunition', 
      'clothes'
    ];

    if (!validTypes.includes(this.type)) {
      const invalid = this.type;
      this.type = null;
      this.quantity = 0;
      return `I don\`t think a ${invalid} will help us.`;
    } else {
    
      return `Great, we\'ll need lots of ${this.type}!`;
    };
  };
}

module.exports = Gear;
