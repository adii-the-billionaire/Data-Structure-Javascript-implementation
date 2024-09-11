// 307. Reverse Bits
// BitManipulation

// Reverse bits of a given 32 bits unsigned integer.

// Input 1: n = 00000010100101000001111010011100
// Output 1: 964176192
// Explanation 1: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 whose binary representation is 00111001011110000010100101000000.
// var solve = function(num) {
//     let numStr = num.toString();
//     let reversedStr = "";
//     for (let i = numStr.length - 1; i >= 0; i--) {
//         reversedStr += numStr[i];
//     }
//     return reversedStr;
// };
//console.log(solve("00000010100101000001111010011100"));
var solve = function(s) {
    let sum = 0;
    let si = s.toString(2);
    for (let i = 0; i < si.length; i++) {
        sum = sum + parseInt(si[i]);
    }
    return sum;
};
console.log(solve(00000000000000000000000000001011));
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     //convert the integer to a binary string
//     let binary = n.toString(2);
//     //count the number of 1's in the string
//     let count = 0;
//     for (let i = 0; i < binary.length; i++) {
//         if (binary[i] === "1") {
//             count++;
//         }
//     }
//     //return the count
//     return count;
// };
// console.log(hammingWeight(0000000000000000000000000001011));