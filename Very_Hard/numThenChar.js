/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function sortMixedArray(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  } else if (typeof a === "number") {
    return -1;
  } else {
    return 1;
  }
}

function numThenChar(arr) {
  let lengthsArr = [];
  let allChars = [];
  let sortedArrs = [];
  for (let subArr of arr) {
    lengthsArr.push(subArr.length);
    allChars.push(...subArr);
  }
  allChars.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else if (typeof a === "string" && typeof b === "string") {
      const isACapital = a === a.toUpperCase() && a !== a.toLowerCase();
      const isBCapital = b === b.toUpperCase() && b !== b.toLowerCase();

      if (isACapital && !isBCapital) {
        return -1;
      }
      if (!isACapital && isBCapital) {
        return 1;
      }
      return a.localeCompare(b);
    } else if (typeof a === "number") {
      return -1;
    } else {
      return 1;
    }
  });
  let i = 0;
  let currentArray;
  let previousChars = 0;
  for (let j = 0; j < lengthsArr.length; j++) {
    currentArray = [];
    while (i < lengthsArr[j] + previousChars) {
      currentArray.push(allChars[i]);
      i++;
    }
    previousChars += lengthsArr[j];
    sortedArrs.push(currentArray);
  }
  return sortedArrs;
}

console.log(
  numThenChar([
    [1, 2, 4.4, "f", "a", "b"],
    [0],
    [0.5, "d", "X", 3, "s"],
    ["f", "e", 8],
    ["p", "Y", "Z"],
    [12, 18],
  ])
);
exports.solution = numThenChar;
