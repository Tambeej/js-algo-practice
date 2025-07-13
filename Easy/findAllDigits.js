/*
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

Examples
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
Notes
The digits can be discovered in any order.
*/

function findAllDigits(array) {
  let numbersSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let devider = 1000;
    let digit = Math.floor(number / devider);
    while (devider >= 1) {
      if (numbersSet.has(digit)) {
        numbersSet.delete(digit);
      }
      number  %= devider;
      devider /= 10;
      digit = Math.floor(number / devider);
    }
    if (numbersSet.size === 0) {
      return array[i];
    }
  }
  return "Missing digits!";
}


exports.solution = findAllDigits;
