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
