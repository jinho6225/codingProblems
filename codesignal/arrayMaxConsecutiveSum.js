/**
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
Input/Output

[execution time limit] 5 seconds (ts)

[input] array.integer inputArray

Array of positive integers.

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
1 ≤ inputArray[i] ≤ 1000.

[input] integer k

An integer (not greater than the length of inputArray).

Guaranteed constraints:
1 ≤ k ≤ inputArray.length.

[output] integer

The maximal possible sum.
 */

function arrayMaxConsecutiveSum(inputArray, k) {
  var newArr = inputArray.slice(0, k);
  var sum = newArr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  var max = sum;
  for (var i = 1; i < inputArray.length - (k - 1); i++) {
    sum = sum - inputArray[i - 1];
    sum = sum + inputArray[i + (k - 1)];
    if (sum > max) max = sum;
  }
  return max;
}
