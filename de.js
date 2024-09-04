var solve = function (n) {
	let decimal = 0;
	let i = 0;
	while (n > 0) {
		let bit = n % 10;
		decimal = decimal + bit * Math.pow(2, i);
		i++;
		n = parseInt(n / 10);
	}
	return decimal;
};
console.log(solve(1001));
