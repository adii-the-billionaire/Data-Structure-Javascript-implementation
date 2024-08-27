var evenSum = function (n) {
	let a = 0;
	if (n % 2 != 0) return false;
	for (let i = 2; i <= n; i = i + 2) {
		if (n % i == 0) {
			a = a + i;
		}
	}
	return a;
};

console.log(evenSum(2));
