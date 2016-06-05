let Player = require('../lib/player');
let Card = require('../lib/card');
let DB = require('../db.js');

let _ = require('underscore');

class Board {
  constructor() {
    this.player = new Player(20)
    this.cards = _.map(_.sample(DB.cards, 2), (dbCard) => {
      return new Card(dbCard.damage, dbCard.defense)
    });
  }
}

module.exports = Board;