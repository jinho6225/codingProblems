/*
204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */

const isPrime = (number) => {
  if (number === 2) return true; // 2
  if (number < 2 || !(number % 2)) {
    //4,6,8
    return false;
  } //9 =>3
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    //3,5,7,
    if (number % i === 0) return false;
  }
  return true;
};
var countPrimes = function (n) {
  let output = 0;
  for (let i = 2; i < n; i++) {
    //n10 //i=2,3,5,7 //i=4,6,8,9,10
    if (isPrime(i)) {
      output++; //1,1
    }
  }
  return output;
};

var countPrimes = function (n) {
  if (n <= 2) return 0;
  let count = 0,
    i = 1;
  function isPrime(num) {
    if (num === 2) {
      return true;
    }
    if (num < 2 || !Number.isInteger(num) || !(num % 2)) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  while (i < n) {
    if (isPrime(i)) {
      count++;
    }
    i++;
  }
  return count;
};
