class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.clothes = {
      dresses: ['Iris']
    };
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    this.clothes.dresses = [...this.clothes.dresses, ...flowers]
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    this.disposition === 'Vengeful' 
      && (infant.disposition = 'Malicious')
      && this.humanWards.push(infant);
    
    this.humanWards.length > 2 
      && (this.disposition = 'Good natured');
      
    return infant;
  }
}

module.exports = Fairy;