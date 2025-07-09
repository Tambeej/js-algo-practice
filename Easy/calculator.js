/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(a, op, b) {
  if (op == "-") {
    return substract(a, b);
  }
  if (op == "+") {
    return add(a, b);
  }
  if (op == "*") {
    return multiple(a, b);
  }
  if ((op = "/")) {
    return divide(a, b);
  }
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = function (a, b) {
  if (b == 0) {
    return "Can't divide by 0!";
  }
  return a / b;
};

exports.solution = calculator;
