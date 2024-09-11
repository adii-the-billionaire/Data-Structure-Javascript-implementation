// Input: n = 25
// Output: 3
// Divisors are 1, 5 and 25.

// Input: n = 24
// Output: 8
// Divisors are 1, 2, 3, 4, 6, 8
// 12 and 2

var solve = function (n) {
	var coutnDiv = 2;
	for (let i = 2; i * i < n; i++) {
		if (n % i == 0) {
			coutnDiv++;
			if (i * i !== n) {
				coutnDiv++;
			}
		}
	}
	return coutnDiv;
};

console.log(solve(24));
