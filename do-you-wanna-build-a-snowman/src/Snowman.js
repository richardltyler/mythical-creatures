class Snowman {
  constructor({carrots, coal, buttons, snowballs}) {
    this.carrots = carrots;
    this.coal = coal;
    this.buttons = buttons;
    this.snowballs = snowballs;
    this.magicHat = false;
  };

  canWearMagicHat() {
    if (this.coal > 1 
        && this.buttons > 4 
        && this.carrots > 0 
        && this.snowballs > 1) {

      this.magicHat = true;
    };
  };
};

module.exports = Snowman;