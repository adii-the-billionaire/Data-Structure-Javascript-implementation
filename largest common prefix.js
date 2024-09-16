// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

//     Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function (strs) {
	let str = "";

	for (let i = 0; i < strs.length; i++) {
		console.log(strs[i][i]);
	}
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
