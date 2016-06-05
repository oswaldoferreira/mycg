let assert = require('chai').assert;
let Match = require('../lib/match');
let Player = require('../lib/player');
let Board = require('../lib/board');

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