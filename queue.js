var solve = function(nums) {
    let numss = nums.toString();
    let i = 0;
    let j = numss.length - 1;
    while (i < j) {
        let temp = numss[i];
        numss[i] = numss[j];
        numss[j] = temp;
        i++;
        j--;
    }
    return numss;
};
console.log(solve(12345));