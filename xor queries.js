// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8]
// Explanation:
// The binary representation of the elements in the array are:
// 1 = 0001
// 3 = 0011
// 4 = 0100
// 8 = 1000
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2
// [1,2] = 3 xor 4 = 7
// [0,3] = 1 xor 3 xor 4 xor 8 = 14
// [3,3] = 8
var xorQueries = function(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let a = queries[i][0];
        let b = queries[i][1];
        let c = 0;
        while (a <= b) {
            c = arr[a] ^ c;
            a++;
        }
        queries[i] = c;
    }
    return queries;
};
console.log(
    xorQueries(
        [1, 3, 4, 8], [
            [0, 1],
            [1, 2],
            [0, 3],
            [3, 3],
        ],
    ),
);