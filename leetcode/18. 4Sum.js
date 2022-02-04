/*
18. 4Sum
Medium

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
Notice that the solution set must not contain duplicate quadruplets.

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Input: nums = [], target = 0
Output: []
 
Constraints:
0 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = []
    if (nums.length < 4) return result
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length-3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length-2; j++) {
            if (j > i+1 && nums[j] === nums[j-1]) continue        
            let k = j + 1;
            let l = nums.length - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                    while (nums[k] === nums[k+1]) k++
                    while (nums[l] === nums[l-1]) l--
                    k++
                    l--
                } else if (sum < target) {
                    k++
                } else if (sum > target) {
                    l--
                }
            }
        }
    }
    return result
}

// define result array as empty    
// nums.sort((a,b) => a-b) sort the nums array by ascending order usgin built in sort method
// iterate for loop
//     if current element is equal to prev element
//         then, continue
//     iterate for loop
//         if current element is equal to prev element
//             then, continue
//         define k equal j + 1
//         define l as nums array of length-1        
//         using while loop
//         condition k less than l        
//         let define sum as nums[i] + nums[j] + nums[k] + nums[l]
// 			if (sum === target) {
// 				results.push([nums[i], nums[j], nums[k], nums[l]])
// 				while (nums[k] === nums[k + 1]) k++
// 				while (nums[l] === nums[l - 1]) l--
//             k increment
//             l decrement
//             if the sum is too small, increment `k` to get closer to the target
//             if the sum is too large, decrement `l` to get closer to the target      


var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let set = new Set(), res = [];
    for (let i = 0; i < nums.length-3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue        
        for (let j = i+1; j < nums.length-2; j++) {
            let m = new Map();
            for (let k = j+1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let diff = target - sum
                if (m.has(diff)) {
                    set.add(`${nums[i]}#${nums[j]}#${diff}#${nums[k]}`);
                }
                m.set(nums[k], k);
            }
        }
    }
    for (let key of set) {
        res.push(key.split("#"));
    }
    return res;
};