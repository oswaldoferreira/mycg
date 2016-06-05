let assert = require('chai').assert;
let Player = require('../../server/game/player');

describe('Player', function () {
  describe('attributes', function () {
    it('has life', function () {
      let player = new Player(100)
      assert.equal(player.life, 100)
    });
  });

  describe('#alive', function () {
    describe('when below 0 life', function () {
      it('is not alive', function () {
        let player = new Player(-1)
        assert.equal(player.alive(), false)
      });
    });

    describe('when 0 life', function () {
      it('is not alive', function () {
        let player = new Player(0)
        assert.equal(player.alive(), false)
      });
    });

    describe('when above 0 life', function () {
      it('is alive', function () {
        let player = new Player(1)
        assert.equal(player.alive(), true)
      });
    });
  });
});