class Robe {
  constructor() {
    this.emptyAllPockets();
  };

  addToPocket(item) {
    for (const i of this.pockets.keys()) {
      if (this.pockets[i].length === 0) {
        this.pockets[i] = [item]; 
        break;
      };
    };
  };

  retrieve(item) {
    for (const i of this.pockets.keys()) {
      if (this.pockets[i].includes(item)) {
        this.pockets[i] = [];
        return item;
      };
    };
  };

  emptyAllPockets() {
    this.pockets = new Array(10).fill([]);
  };
};

module.exports = Robe;