var solve = function(nums) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            if (((nums[j] >> i) & 1) === 1) {
                sum++;
                sum %= 3;
            }
        }
        if (sum !== 0) {
            ans |= sum << i;
        }
    }
    return ans;
};
console.log(solve(-1, -2, -2, -3, -2, -3, -3));
//this solution is not worked for negative number so you convert the elements of the array if it is negative number