const View = require('./ttt-view');
const Game = require('../../solution/game');

$( () => {
  const v = new View(new Game(), $('.ttt'));
});
