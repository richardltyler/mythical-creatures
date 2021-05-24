class Roadrace {
  constructor({ title, city }) {
    this.name = title;
    this.location = city;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance = miles;
    
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    this.participants.forEach(runner => {
      runner.runRace(this.name, this.distance);
    })
  }
}

module.exports = Roadrace;
