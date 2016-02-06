var cells = document.getElementsByClassName("cell");
var turnTic = true;
var statusText = document.getElementsByClassName("status")[0];
var firstTurn = true;
statusText.innerHTML = "Ход крестиков(X)";

for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function(e) {
    var cell = this;
    var cellValue = this.innerHTML;
    if(cellValue === "") {
      if(turnTic) {
        cell.innerHTML = "X";
        statusText.innerHTML = "Ход ноликов(0)";
      }
      else {
        cell.innerHTML = "0";
        statusText.innerHTML = "Ход крестиков(X)";
      }
      if(!firstTurn && checkFinish()) clearBoard();
      if(firstTurn) firstTurn = false;
      turnTic = !turnTic;
    }
  }
}

function checkFinish() {
  if(cells[0].innerHTML !== "" && cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML) {
    showWinner(cells[0].innerHTML);
    return true;
  }
  else if (cells[3].innerHTML !== "" && cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML) {
    showWinner(cells[3].innerHTML);
    return true;
  }
  else if (cells[6].innerHTML !== "" && cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML) {
    showWinner(cells[6].innerHTML);
    return true;
  }
  else if (cells[0].innerHTML !== "" && cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML) {
    showWinner(cells[0].innerHTML);
    return true;
  }
  else if (cells[1].innerHTML !== "" && cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML) {
    showWinner(cells[1].innerHTML);
    return true;
  }
  else if (cells[2].innerHTML !== "" && cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML) {
    showWinner(cells[2].innerHTML);
    return true;
  }
  else if (cells[0].innerHTML !== "" && cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML) {
    showWinner(cells[0].innerHTML);
    return true;
  }
  else if (cells[2].innerHTML !== "" && cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML) {
    showWinner(cells[2].innerHTML);
    return true;
  }
  else return false;
}

function getNameWinner(st) {
  if(st === "X") return "Победили крестики(X)";
  else return "Победили нолики(0)";
}
function showWinner(symbol) {
  statusText.innerHTML = getNameWinner(symbol);
  // alert(getNameWinner(symbol));
}
function clearBoard() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  statusText.innerHTML = "Ход крестиков(X)";
  turnTic = true;
  firstTurn = true;
}
