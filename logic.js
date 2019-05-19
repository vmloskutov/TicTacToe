let players = ['x', 'o'];
let activePlayer = 0;
let filled;
let str;
let sqSide;
let board = [];

function initBoard(sqSide) {
  for (let i = 0; i < sqSide; i++) {
    board[i] = [];
    for (let j = 0; j < sqSide; j++) {
      board[i][j] = '';
    }
  }
}

function rand() {
  return Math.round(Math.random());
}

function startGame() {
  board = [];
  sqSide = 4;
  initBoard(sqSide);
  activePlayer = rand();
  renderBoard(board);
}

function click(x, y) {
  board[x][y] = players[activePlayer];
  renderBoard(board);
  checkWin(board);
  activePlayer = (activePlayer + 1) % 2;

}

function checkWin(board) {
  let temp;
   str = '';
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board.length; i++) {
      str = str + board[i][j];
    }
    if (str.length === board.length && !str.includes('o')) {
      showWinner(activePlayer);
    } else if (str.length === board.length && !str.includes('x')) {
      showWinner(activePlayer);
    }
    str = '';
    for (let i = 0; i < board.length; i++) {
      str = str + board[j][i];
    }
    if (str.length === board.length && !str.includes('o')) {
      showWinner(activePlayer);
    } else if (str.length === board.length && !str.includes('x')) {
      showWinner(activePlayer);
    }
    str = '';
  }
  for (let i = 0; i < board.length; i++) {
      str = str + board[i][i];
  }
  if (str.length === board.length && !str.includes('o')) {
      showWinner(activePlayer);
  } else if (str.length === board.length && !str.includes('x')) {
      showWinner(activePlayer);
  }
  str = '';
  for (let i = 0; i < board.length; i++) {
      str = str + board[i][board.length - 1 - i];
  }
  if (str.length === board.length && !str.includes('o')) {
      showWinner(activePlayer);
  } else if (str.length === board.length && !str.includes('x')) {
      showWinner(activePlayer);
  }
  filled = true;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '') {
        filled = false;
      }
    }
  }
  if (filled) {
    draw();
  }
}