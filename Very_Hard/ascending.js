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

  if (result.length > 1 && result[result.length - 1].length < partLength) {
    result[result.length - 2] += result.pop();
  }

  return result;
}

function areAllCharsNine(str) {
  return /^9*$/.test(str);
}

function ascending(str) {
  let flag = true;
  let cleanStr = "";
  for (let i = 1; i <= str.length / 2; i++) {
    const parts = splitStringIntoEqualParts(str, i);
    for (let j = 0; j < parts.length - 1; j++) {
      if (areAllCharsNine(parts[j])) {
        cleanStr = parts.slice(j + 1, parts.length).join("");
        parts.splice(j + 1, parts.length - j + 1);
        parts.push(...splitStringIntoEqualParts(cleanStr, i + 1));
      }
      if (Number(parts[j]) + 1 != Number(parts[j + 1])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(`true: ${str}`);
      return true;
    }
    flag = true;
  }
  console.log(`false: ${str}`);
  return false;
}

console.log(ascending("919920921"));
exports.solution = ascending;
