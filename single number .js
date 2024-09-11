//using map frequency count
//using iterative method
// Input 1: nums = [2,2,1]
// Output 1: 1
// Explanation 1: 1 is present only once.

// Input 2: nums = [4,1,2,1,2]
// Output 2: 4
//using of hash map

var solve = function(nums) {
    let map = new Map();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        if (map.get(nums[i]) === 1) {
            return nums[i];
        }
    }
};
console.log(solve([2, 2, 10, 5, 5]));