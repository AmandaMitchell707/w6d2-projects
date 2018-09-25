
class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul').on('click', 'li', e => {
      if (!this.game.board.isOver()) {
        this.makeMove($(e.currentTarget));
      }
    });
  }

  makeMove($square) {
    if ($square.hasClass('marked')) {
      $(() => alert('Move is invalid!'));
    } else {
      this.game.playMove($square.data('pos'));
      $square.addClass('marked');
      $square.text(this.game.currentPlayer);
    }
    if (this.game.board.isOver()) {
      
      $('body').append(`<h1 class="winner">You win, ${this.game.currentPlayer}!</h1>`);
    }
  }

  setupBoard() {
    console.log(this.$el);

    this.$el.append($("<ul class='grid'></ul>"));
    let num = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $('<li></li>').appendTo('.grid');
        $('li').eq(num).data('pos', [i, j]);
        num++;
      }
    }
  }
}

module.exports = View;
