var solve = function (n) {
	let arr = [];
	if (n <= 1) return;
	for (let i = 2; i * i <= n; i++) {
		while (n % i == 0) {
			arr.push(i);
			n = n / i;
		}
		if (n > 1) {
			arr.push(n);
		}
	}
	return arr;
};
console.log(solve(12));
