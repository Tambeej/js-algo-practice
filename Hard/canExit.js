/*
A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.

Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.

Examples
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true

canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false

// This maze only has dead ends!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false

// Exit only one block away, but unreachable!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
Notes
In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
There can be dead ends in a maze - one exit path is sufficient.
*/



function canExitHelper(matrix, row, col, visited) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  if (row === rows - 1 && col === cols - 1) return true;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let [xVal, yVal] of moves) {
    const newRow = row + xVal;
    const newCol = col + yVal;
    const key = `${newRow},${newCol}`;

    if (
      newRow >= 0 &&
      newRow < rows &&
      newCol >= 0 &&
      newCol < cols &&
      matrix[newRow][newCol] === 0 &&
      !visited.has(key)
    ) {
      visited.add(key);
      if (canExitHelper(matrix, newRow, newCol, visited)) {
        return true;
      }
    }
  }
  return false;
}

function canExit(matrix) {
  const prevSet = new Set(["0 , 0"]);
  return canExitHelper(matrix, 0, 0, prevSet);
}

exports.solution = canExit;
