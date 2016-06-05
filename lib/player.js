class Player {
  constructor(life) {
    this.life = life
  }

  alive() {
    return this.life > 0
  }
}

module.exports = Player;