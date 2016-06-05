let Player = require('../lib/player');
let Board = require('../lib/board');

class Match {
  constructor() {
    this.boards = [new Board(), new Board()]
  }
}

module.exports = Match;