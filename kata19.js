const generateBoard = (wQueen, bQueen) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([]);
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }

  board[wQueen[0]][wQueen[1]] = 1;
  board[bQueen[0]][bQueen[1]] = 1;
  return board;
};

const checkDiagonalBR = (queen1, queen2) => {
  if (queen1[0] === queen2[0] && queen1[1] === queen2[1]) {
    return true;
  } else if (queen1[0] > 7 || queen1[1] > 7) {
    return false;
  } else {
    return checkDiagonalBR([queen1[0] + 1, queen1[1] + 1], queen2);
  }
};

const checkDiagonalBL = (queen1, queen2) => {
  if (queen1[0] === queen2[0] && queen1[1] === queen2[1]) {
    return true;
  } else if (queen1[0] > 7 || queen1[1] < 0) {
    return false;
  } else {
    return checkDiagonalBL([queen1[0] + 1, queen1[1] - 1], queen2);
  }
};

const queenThreat = board => {

  let queen1 = [], queen2 = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      if (board[i][j] === 1) {
        if (queen1[0] === undefined) {
          queen1.push(i);
          queen1.push(j);
        } else {
          queen2.push(i);
          queen2.push(j);
        }
      }

    }
  }

  if (queen1[0] === queen2[0]) return true;
  if (queen1[1] === queen2[1]) return true;
  if (checkDiagonalBR(queen1, queen2)) return true;
  if (checkDiagonalBL(queen1, queen2)) return true;

  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
