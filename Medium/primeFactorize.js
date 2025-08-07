/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

function primeFactorize(num) {
  let primes = [];
  let devider = 2;

  while (!isPrime(num) && num >= 2) {
    if (num % devider === 0) {
      if (isPrime(devider)) {
        primes.push(devider);
      }
      num /= devider;
    } else {
      devider++;
    }
  }
  if (isPrime(num)) {
    primes.push(num);
  }
  return primes;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeFactorize(100));

exports.solution = primeFactorize;
