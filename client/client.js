(function() {
  let startGameButton = document.querySelectorAll('[data-start-game-button]')[0];

  startGameButton.addEventListener('click', function (e) {
    fetch('http://localhost:5000/start')
      .then(function(response) {
        return response.json();
      })
      .then(startGame)
  });

  function startGame(data) {
    console.log(data);
  }
})()
