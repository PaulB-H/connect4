// console.log("Hello 4");

const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

const drop = (color, col) => {
  let freeSpace = false;
  for (let i = 5; i >= 0; i--) {
    if (!board[i][col]) {
      board[i][col] = color;
      freeSpace = true;
      return board;
    }
  }
  if (!freeSpace) {
    return "No free space";
  }
};
