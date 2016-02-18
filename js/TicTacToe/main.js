$(document).ready(function() {

  var Game = function() {

    this.currentPlayer = "X";
    this.playerMarker1 = "X";    
    this.playerMarker2 = "0";
    this.cells = $(".cell");
    this.status = $(".status");
    $(this.status).text("Turn X");
    this.stop = false;

    this.selectCell = function(cell) {
      if($(cell).text() !== "" || this.stop) return false;
      this.playerMove(cell);
    }

    this.playerMove = function(cell) {
      $(cell).text(this.currentPlayer);
      if(!this.checkFinish()) this.swapCurrentPlayer();
    }

    this.checkFinish = function() {
        if ($(this.cells[0]).text() !== "" && $(this.cells[0]).text() === $(this.cells[1]).text() 
            && $(this.cells[0]).text() === $(this.cells[2]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[3]).text() !== "" && $(this.cells[3]).text() === $(this.cells[4]).text() 
            && $(this.cells[3]).text() === $(this.cells[5]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[6]).text() !== "" && $(this.cells[6]).text() === $(this.cells[7]).text() 
            && $(this.cells[6]).text() === $(this.cells[8]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[0]).text() !== "" && $(this.cells[0]).text() === $(this.cells[3]).text() 
            && $(this.cells[0]).text() === $(this.cells[6]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[1]).text() !== "" && $(this.cells[1]).text() === $(this.cells[4]).text() 
            && $(this.cells[1]).text() === $(this.cells[7]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[2]).text() !== "" && $(this.cells[2]).text() === $(this.cells[5]).text() 
            && $(this.cells[2]).text() === $(this.cells[8]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[0]).text() !== "" && $(this.cells[0]).text() === $(this.cells[4]).text() 
            && $(this.cells[0]).text() === $(this.cells[8]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }
        if ($(this.cells[2]).text() !== "" && $(this.cells[2]).text() === $(this.cells[4]).text() 
            && $(this.cells[2]).text() === $(this.cells[6]).text()) {
          $(this.status).text("Winner " + this.currentPlayer);
          this.stop = true;
          return true;
        }

        var count = 0;
        for (var i = 0; i < this.cells.length; i++) {
          if ($(this.cells[i]).text() !== "") count++;
        }
        if (count === 9) {
          $(this.status).text("Draw");
          return true;
        }
        return false;
    }

    this.swapCurrentPlayer = function() {
      if (this.currentPlayer === this.playerMarker1) {
        this.currentPlayer = this.playerMarker2;
      }
      else this.currentPlayer = this.playerMarker1;
      $(this.status).text("Turn " + this.currentPlayer);
    }

    this.reset = function() {
      for (var i = 0; i < this.cells.length; i++) {
        $(this.cells[i]).text("");
      }
      this.currentPlayer = this.playerMarker1;
      $(this.status).text("Turn X");
      this.stop = false;
    }


  }

  var game = new Game();

  $(".cell").click(function() {
    game.selectCell($(this));
  });

  $(".btn-reset").click(function() {
    game.reset();
  })



})