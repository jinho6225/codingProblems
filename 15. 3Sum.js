/*
15. 3Sum
Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = []
Output: []

Input: nums = [0]
Output: []

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    if (!nums.length || nums.length < 3) return result
    nums.sort((a,b) => a-b)
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue
        let m = new Map();
        for (let j = i+1; j < nums.length; j++) {
            let target = 0
            let diff = target - (nums[i]+nums[j])
            if (m.has(diff)) {
                set.add(`${nums[i]}#${diff}#${nums[j]}`)
            } else {
                m.set(nums[j], j);
            }
        }
    }
    set.forEach(el => result.push(el.split('#')))
    return result
};


//intuitive solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
	const results = []
	if (nums.length < 3) return results
	nums = nums.sort((a, b) => a - b)
	let target = 0
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let j = i + 1
		let k = nums.length - 1
		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === target) {
				results.push([nums[i], nums[j], nums[k]])
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
				j++
				k--
			} else if (sum < target) {
				j++
			} else { // (sum > target)
				k--
			}
		}
	}
	return results
};