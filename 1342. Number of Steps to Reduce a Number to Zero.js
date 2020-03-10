/*
1342. Number of Steps to Reduce a Number to Zero
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
\
Example 1:
Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.
Example 2:
Input: num = 8
Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.
Example 3:
Input: num = 123
Output: 12

Constraints:
0 <= num <= 10^6
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  //define counter variable
  var counter = 0;
  //if it equal to 0
  if (num === 0) {
    //return count
    return counter
  }
  if (num % 2 === 0) {
    counter++
    counter = counter + numberOfSteps(num/2)
    return counter
  }
  if (num % 2 === 1) {
    counter++
    counter = counter + numberOfSteps(num-1)
    return counter
  }
  //if it's even num, divide /2
    //return recursive
  //if it's odd num, subtract -1
    //return recursive
};

numberOfSteps(8)
