class Wizard {
  constructor({ name }) {
    this.name = name;
    this.pets = [];
    this.petsCount = 0;
    // this.wand;
  };

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount = this.pets.length;
  };

  petList() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const petList = this.pets.reduce((acc, {type, name}, i, pets) => {
      const article = vowels.includes(type[0]) ? 'An' : 'A';
      const punct = i < pets.length - 1 ? ';' : '.';

      acc.push(`${article} ${type} named ${name}${punct}`);

      return acc;
    }, []);

    return petList.join(' ')
  };

  getWand(wand) {
    this.wand = wand;
  };

  castSpell(spell) {
    return this.wand.cast(spell);
  }
};

module.exports = Wizard;