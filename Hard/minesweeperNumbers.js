/*
Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.

Examples
The input may look like this:

[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
The 0 represents an empty space. The 1 represents a mine.

You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:

[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
Notes
Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
A wikipedia page explaining how Minesweeper works is available in the Resources tab
*/

function createMatrix(rows, cols, initialValue = 0) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(initialValue);
    }
    matrix.push(row);
  }
  return matrix;
}

function minesweeperNumbers(matrix) {
  const rows = matrix.length;
  if (!rows) {
    return [];
  }
  const cols = matrix[0].length;
  let newMat = createMatrix(rows, cols);
  const neighboures = [
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [0, -1],
    [0, 1],
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] == 1) {
        newMat[row][col] = 9;
      } else {
        for (let [xVal, yVal] of neighboures) {
          const newRow = row + xVal;
          const newCol = col + yVal;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            newMat[row][col] += matrix[newRow][newCol];
          }
        }
      }
    }
  }
  return newMat;
}



exports.solution = minesweeperNumbers;
