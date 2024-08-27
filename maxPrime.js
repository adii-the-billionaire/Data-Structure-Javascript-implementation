var solve = function (n) {
	let maxPrime = -1;
	while (n % 2 == 0) {
		n = parseInt(n / 2);
		maxPrime = 2;
	}
	while (n % 3 == 0) {
		n = parseInt(n / 3);
		maxPrime = 3;
	}
	for (let i = 5; i * i < n; i += 6) {
		while (n % i == o) {
			maxPrime = i;
			n = parseInt(n / i);
		}
		while (n % (i + 2) == 0) {
			maxPrime = i + 2;
			n = parseInt(n / (i + 2));
		}
	}
	return n > 4 ? n : maxPrime;
};
console.log(solve(69));
