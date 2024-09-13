// Input: n = 9
// Output: 8
// Explanation: 1,2,3,4,5,6,7,8,9
// ->2,4,6,8 -> 4,8 -> 8.
var solve = function(n) {
    let x = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            x = Math.max(x, i);
        }
    }
    return x;
};
console.log(solve(9));