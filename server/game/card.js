let Player = require('./player');

class Card {
  constructor(damage, defense) {
    this.damage = damage
    this.defense = defense
  }

  attack(resource) {
    if (resource instanceof Card) {
      resource.defense = this._subtractWithLimit(this.damage, resource.defense)
      this.defense = this._subtractWithLimit(resource.damage, this.defense)
    } else if (resource instanceof Player) {
      resource.life = this._subtractWithLimit(this.damage, resource.life)
    }
  }

  alive() {
    return this.defense > 0
  }

  _subtractWithLimit(damage, defense) {
    return (defense >= damage) ? defense - damage : 0
  }
}

module.exports = Card;