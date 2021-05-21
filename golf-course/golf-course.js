class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    const names = group.map(golfer => golfer.name).reverse();

    if (this.currentlyPlaying.length < this.openings) {
      this.currentlyPlaying = [ ...names, ...this.currentlyPlaying];
      this.openings -= group.length;

      return 'You\'re checked in. Have fun!';
    } else {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  }
}

module.exports = GolfCourse;
