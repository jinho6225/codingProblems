/*
46. Permutations
Medium

Given a collection of distinct integers, return all possible permutations.

Example:
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/*
 * @param {number[]} nums
 * @return {number[][]}
 */

//Runtime: 64 ms, faster than 86.00% of JavaScript online submissions for Permutations.

var permute = function (nums) {
  function swap(x, y) {
    let arr = [];
    let tmp = x;
    x = y;
    y = tmp;
    arr.push(x, y);
    return arr;
  }

  let arr = [];
  if (nums.length === 1) {
    arr.push(nums);
    return arr;
  } else if (nums.length === 2) {
    arr.push(nums, swap(nums[0], nums[nums.length - 1]));
    return arr;
  } else if (nums.length > 2) {
    for (let i = 0; i < nums.length; i++) {
      let newNum = nums.slice();
      let holder = newNum.splice(i, 1);
      let store = [];
      store = store.concat(permute(newNum));
      for (let j = 0; j < store.length; j++) {
        hold = holder.slice();
        hold = hold.concat(store[j]);
        arr.push(hold);
      }
    }
    return arr;
  }
};

var input = [1, 2, 3];
permute(input);


//another solution added

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  if (nums.length === 1) {
      result.push(nums)
      return result
  } else if (nums.length === 2) {
      result.push([...nums])
      result.push([nums[1], nums[0]])
      return result
  } else {
     return helper(nums)
  }
  function helper(nums) {
      let arr = []
      if (nums.length === 2) {
          arr.push([...nums])
          arr.push([nums[1], nums[0]])
          return arr
      }
      for (let i = 0; i < nums.length; i++) {
          let newArr = nums.slice(0)
          newArr.splice(i,1) 
          let returnArray = helper(newArr)
          for (let ar of returnArray) {
              arr.push([nums[i], ...ar])
          }
      }
      return arr
  }
};

