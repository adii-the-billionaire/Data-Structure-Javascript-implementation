// Input: N = 371;
// Output: true;
var solve = function (n) {
	let sum = 0;
	let num = n.toString();
	for (let i = 0; i < num.length; i++) {
		sum = sum + num[i] * num[i] * num[i];
	}
	if (sum === n) {
		return true;
	} else {
		return false;
	}
};
console.log(solve(71));
