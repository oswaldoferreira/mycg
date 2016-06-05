let assert = require('chai').assert;
let Match = require('../../server/game/match');
let Player = require('../../server/game/player');
let Board = require('../../server/game/board');

describe('Match', function () {
  describe('boards', function () {
    it('responds to boards', function () {
      let match = new Match();
      assert.equal(match.boards.length, 2)
    });

    it('generates 2 boards', function () {
      let match = new Match();
      assert.equal(match.boards[0] instanceof Board, true)
      assert.equal(match.boards[1] instanceof Board, true)
    });
  });
});