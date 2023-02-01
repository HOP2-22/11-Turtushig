const board = document.querySelector("#board");
let turn = "X";

board.addEventListener("click", function (event) {
  if (event.target.tagName === "TD") {
    if (event.target.textContent === "") {
      event.target.textContent = turn;
      if (checkForWin()) {
        alert(turn + " wins!");
      } else if (checkForDraw()) {
        alert("Draw!");
      } else {
        turn = turn === "X" ? "O" : "X";
      }
    }
  }
});

function checkForWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board.rows[i].cells[0].textContent === turn &&
      board.rows[i].cells[1].textContent === turn &&
      board.rows[i].cells[2].textContent === turn
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      board.rows[0].cells[i].textContent === turn &&
      board.rows[1].cells[i].textContent === turn &&
      board.rows[2].cells[i].textContent === turn
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    board.rows[0].cells[0].textContent === turn &&
    board.rows[1].cells[1].textContent === turn &&
    board.rows[2].cells[2].textContent === turn
  ) {
    return true;
  }

  if (
    board.rows[0].cells[2].textContent === turn &&
    board.rows[1].cells[1].textContent === turn &&
    board.rows[2].cells[0].textContent === turn
  ) {
    return true;
  }

  return false;
}

function checkForDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board.rows[i].cells[j].textContent === "") {
        return false;
      }
    }
  }
  return true;
}
