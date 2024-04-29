function isValidSudoku(board: string[][]): boolean {
  
}

const isValidRowAndColumn = (
  value: string,
  value_row: number,
  value_col: number,
  board: string[][],
): boolean => {
  console.log(
    `value: ${value}, value_x_row: ${value_row}, value_y_col: ${value_col}`,
  );
  for (let x = 0; x < 8; x++) {
    console.log(
      `board[value_col][x]: ${
        board[value_col][x]
      }, x: ${x}, value_col: ${value_col}`,
    );
    if (x === value_row) {
      continue;
    }
    if (board[value_col][x] === value) {
      console.log("HERE2");
      return false;
    }
  }

  for (let y = 0; y < 8; y++) {
    console.log(
      `board[value_row][y]: ${
        board[y][value_row]
      }, y: ${y}, value_row: ${value_row}`,
    );
    if (y === value_col) {
      continue;
    }
    if (board[y][value_row] === value) {
      console.log("HERE3");
      return false;
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
