//  for (int i = 2; i < n; i++)
//         if (n % i == 0)
//             return false;
var solve = function (n) {
	let count = 0;
	var isPrime = function (n) {
		if (n <= 1) {
			return false;
		}
		for (let i = 2; i < n; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	};

	for (let i = 2; i <= n; i++) {
		if (isPrime(i)) {
			count++;
		}
	}
	return count;
};
console.log(solve(13));
