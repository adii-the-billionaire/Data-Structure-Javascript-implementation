var hammingWeight = function (n) {
	let sum = 0;
	let a = n.toString(2);
	for (let i = 0; i < a.length; i++) {
		sum = sum + parseInt(a[i]);
	}
	console.log(a);
	return sum;
};
console.log(hammingWeight(32));
