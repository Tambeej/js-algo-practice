/*
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false
*/

function isPandigital(num) {
  let numSet = new Set();
  let digit;
  while (num) {
    digit = num % 10;
    numSet.add(digit);
    if (numSet.size == 10) {
      return true;
    }
    num = Math.floor(num / 10);
  }
  return false;
}

// console.log(isPandigital(84847473937));

exports.solution = isPandigital;
