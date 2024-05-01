// Res: 57ms, 51.42MB
function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;
  let row = 0;
  let col = cols;

  while (row <= rows && col > -1) {
    if (matrix[row][col] === target) return true;

    if (target > matrix[row][col]) row++;
    else col--;
  }

  return false;
}

console.log(searchMatrix([[1]], 2));
