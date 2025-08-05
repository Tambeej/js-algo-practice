/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

function lastCommonMultiple(num1, num2) {
  let smaller;
  let bigger;
  if (num1 < num2) {
    smaller = num1;
    bigger = num2;
  } else {
    smaller = num2;
    bigger = num1;
  }
  let mult;
  for (let i = 1; i <= bigger; i++) {
    mult = smaller * i;
    if (mult % bigger == 0) {
      return mult;
    }
  }
  return smaller * bigger;
}

exports.solution = lastCommonMultiple;
