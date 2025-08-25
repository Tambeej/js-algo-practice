/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/
function splitStringIntoEqualParts(str, partLength) {
  const result = [];
  for (let i = 0; i < str.length; i += partLength) {
    result.push(str.slice(i, i + partLength));
  }
  return result;
}

function ascending(str) {
  let flag = true;
  for (let i = 1; i <= str.length / 2; i++) {
    if (!(str.length % i == 0)) {
      continue;
    }
    const parts = splitStringIntoEqualParts(str, i);
    for (let j = 0; j < parts.length - 1; j++) {
      if (Number(parts[j]) + 1 != Number(parts[j + 1])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
    flag = true;
  }
  return false;
}
exports.solution = ascending;
