/*
581. Shortest Unsorted Continuous Subarray
Easy

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
You need to find the shortest such subarray and output its length.
Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

    let min = Math.min(...nums)
    while (min === nums[0]) {
        nums.splice(0,1)
        min = Math.min(...nums)
    }
    let max = Math.max(...nums)
    let len = nums.length-1
    while (max === nums[len]) {
        nums.splice(len,1)
        max = Math.max(...nums)
        len--
    }
    return nums.length
    
};


//100ms O(n log n)
var findUnsortedSubarray = function(nums) {
    let sortedNums = nums.slice().sort((a,b) => a-b)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortedNums[i]) {
            result.push(i)
        }
    }
    if (!result.length) return 0
    return Math.max(...result) - Math.min(...result) + 1
};


