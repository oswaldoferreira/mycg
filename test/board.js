let assert = require('chai').assert;
let Board = require('../lib/board');
let Card = require('../lib/card');

describe('Board', function () {
  describe('player generation', function () {
    it('generates a player with 20 life', function () {
      let board = new Board();
      assert.equal(board.player.life, 20)
    });
  });

  describe('cards', function () {
    describe('cards generation', function () {
      it('responds to cards', function () {
        let board = new Board();
        assert.equal(board.cards.length, 2)
      });

      it('cards are instances of Card', function () {
        let board = new Board();
        assert.equal(board.cards[0] instanceof Card, true)
        assert.equal(board.cards[1] instanceof Card, true)
      });
    });
  });
});