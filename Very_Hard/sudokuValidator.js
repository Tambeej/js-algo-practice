/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

function columnsToSets(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const columnSets = Array.from({ length: numCols }, () => new Set());

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      columnSets[col].add(matrix[row][col]);
    }
  }

  return columnSets;
}

function boxToSets(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  for (let boxRow = 0; boxRow < numRows; boxRow += 3) {
    for (let boxCol = 0; boxCol < numCols; boxCol += 3) {
      const box = [];
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          box.push(matrix[boxRow + row][boxCol + col]);
        }
      }
      if (hasDuplicates(box)) {
        return false;
      }
    }
  }
  return true;
}

function sudokuValidator(matrix) {
  for (let row of matrix) {
    if (hasDuplicates(row)) {
      return false;
    }
  }
  const columnsMatrix = columnsToSets(matrix);
  for (let set of columnsMatrix) {
    if (set.size !== 9) {
      return false;
    }
  }
  if (!boxToSets(matrix)) {
    return false;
  }
  return true;
}

exports.solution = sudokuValidator;
