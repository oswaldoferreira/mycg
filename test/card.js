let assert = require('chai').assert;
let Card = require('../lib/card');
let Player = require('../lib/player');

describe('Card', function () {
  describe('attributes', function () {
    it('has damage', function () {
      let card = new Card(1, 2)
      assert.equal(card.damage, 1)
    });

    it('has defense', function () {
      let card = new Card(1, 2)
      assert.equal(card.defense, 2)
    });
  });

  describe('#attack', function () {
    describe('when attacking another card', function () {
      it('a card attacks another card it changes target defense', function () {
        let card = new Card(2, 3)
        let anotherCard = new Card(1, 5)

        card.attack(anotherCard)

        assert.equal(anotherCard.defense, 3)
      });

      it('a card attacks another card it changes its own defense based on target attack', function () {
        let card = new Card(2, 3)
        let anotherCard = new Card(1, 5)

        card.attack(anotherCard)

        assert.equal(card.defense, 2)
      });

      it('target defense cant be negative', function () {
        let card = new Card(3, 3)
        let anotherCard = new Card(1, 5)

        card.attack(anotherCard)
        card.attack(anotherCard)

        assert.equal(anotherCard.defense, 0)
      });

      it('attacker defense cant be negative', function () {
        let card = new Card(3, 2)
        let anotherCard = new Card(2, 5)

        card.attack(anotherCard)
        card.attack(anotherCard)

        assert.equal(card.defense, 0)
      });

      describe('when same attack/defense', function () {
        it('both cards stay with 0 defense', function () {
          let card = new Card(3, 3)
          let anotherCard = new Card(3, 3)

          card.attack(anotherCard)

          assert.equal(card.defense, 0)
          assert.equal(anotherCard.defense, 0)
        });
      });
    });

    describe('when attacking another player', function () {
      it('subtracts life of player', function () {
        let card = new Card(3, 2)
        let player = new Player(100)

        card.attack(player)

        assert.equal(player.life, 97)
      });
    });
  });

  describe('#alive', function () {
    describe('when 0 defense', function () {
      it('is not alive', function () {
        let card = new Card(3, 0)
        assert.equal(card.alive(), false)
      });
    });

    describe('when higher than 0 defense', function () {
      it('is alive', function () {
        let card = new Card(3, 1)
        assert.equal(card.alive(), true)
      });
    });
  });
});