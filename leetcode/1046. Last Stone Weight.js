/*
1046. Last Stone Weight

We have a collection of stones, each stone has a positive integer weight.
Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Example 1:
Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

Note:
1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

/*
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // if stones array length less than 2
  // return stones array
  // calling sort.method of stones array passing Anonymous callback function passing two parameter a and b opening curly brace for code block return a-b closing curly brace for code block
  // calling pop method of stones array and assign it to variable name firstNum
  // calling pop method of stones array and assign it to variable name secondNum
  //use if statement (firstNum equal to secondNum) {
  // do nothing
  // } else {
  // firstNum subtract secondNum assign to variable name newNum
  //}
  // calling push method of stones array passing newNum as argument
  // return calling lastStoneWeight function passing (stones array)

  if (stones.length < 2) {
    return stones;
  }
  stones.sort((a, b) => a - b);
  const firstNum = stones.pop();
  const secondNum = stones.pop();
  if (firstNum !== secondNum) {
    const newNum = firstNum - secondNum;
    stones.push(newNum);
  }
  return lastStoneWeight(stones);
};

var input = [2, 7, 4, 1, 8, 1];
lastStoneWeight(input);
