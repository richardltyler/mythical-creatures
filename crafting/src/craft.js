class Craft {
  constructor({ type, materials }) {
    this.name = type;
    this.materials = materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;

    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    return this.materials.reduce((acc, material) => {
      acc += material.calculateMaterialCost();

      return acc;
    }, 0);
  }
}

module.exports = Craft;
