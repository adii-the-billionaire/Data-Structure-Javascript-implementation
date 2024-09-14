var solve = function (n) {
	let temp = n;

	while (temp > 9) {
		let a = temp % 10;

		let b = Math.floor(temp / 10);
		temp = a + b;
	}

	return temp;
};
console.log(solve(3));
