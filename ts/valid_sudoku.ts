function isValidSudoku(board: string[][]): boolean {
  let x_start: number = 1;
  let y_start: number = 1;
  let x_end: number = 3;
  let y_end: number = 3;
  while (x_end <= board[0].length || y_end <= board.length) {
    console.log(
      `x_start: ${x_start}, x_end: ${x_end}, y_start: ${y_start}, y_end: ${y_end}`,
    );
    const foundNumbers: string[] = [];
    for (let y = y_start; y < y_end; y++) {
      for (let x = x_start; x < x_end; x++) {
        if (board[y][x] !== ".") {
          const alreadyFoundNumber: string | undefined = foundNumbers.find(
            (value: string) => {
              return value === board[y][x];
            },
          );
          console.log(
            `alreadyFoundNumber: ${alreadyFoundNumber}, board[y][x]: ${
              board[y][x]
            }`,
          );
          if (alreadyFoundNumber) {
            console.log("HERE1");
            return false;
          }

          foundNumbers.push(board[y][x]);

          if (!isValidRowAndColumn(board[y][x], x, y, board)) {
            return false;
          }
        }
      }
    }

    x_start += 3;
    x_end += 3;
    y_start += 3;
    y_end += 3;
  }
  return true;
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
  for (let x = 0; x < 9; x++) {
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

  for (let y = 0; y < 9; y++) {
    console.log(
      `board[value_row][y]: ${
        board[value_row][y]
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
