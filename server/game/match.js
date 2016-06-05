let Player = require('./player');
let Board = require('./board');

class Match {
  constructor() {
    this.boards = [new Board(), new Board()]
  }
}

module.exports = Match;