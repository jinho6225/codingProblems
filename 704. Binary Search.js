/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1) {
        if (nums[0] === target) return 0
        return -1
    }
    let start = 0
    let last = nums.length-1
    while (start <= last) {
        if (nums[start] === target) return start
        if (nums[last] === target) return last
        start++
        last--
    }
    return -1
};