// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
var subtractProductAndSum = function (n) {
	let num = n.toString();
	let product = 1;
	let sum = 0;
	for (let i = 0; i < num.length; i++) {
		product = product * parseInt(num[i]);
		sum = sum + parseInt(num[i]);
	}
	console.log(sum);

	return product - sum;
};
subtractProductAndSum(234);
