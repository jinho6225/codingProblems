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
