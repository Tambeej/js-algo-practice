/*
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"

oddishOrEvenish(373) ➞ "Oddish"

oddishOrEvenish(4433) ➞ "Evenish"
*/

function oddishOrEvenish(number) {
  let numbers = number.toString().split("");
  numbers.sort((a, b) => {
    const isAOdd = a % 2 !== 0;
    const isBOdd = b % 2 !== 0;

    if (isAOdd && !isBOdd) {
      // a is odd, b is even - a comes first
      return -1;
    } else if (!isAOdd && isBOdd) {
      // a is even, b is odd - b comes first
      return 1;
    } else {
      // Both are odd or both are even - sort numerically
      return a - b;
    }
  });
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      if (i % 2 === 0) {
        return "Evenish";
      } else {
        return "Oddish";
      }
    }
  }
  if (numbers.length % 2 === 0) {
    return "Evenish";
  }
  return "Oddish";
}

exports.solution = oddishOrEvenish;
