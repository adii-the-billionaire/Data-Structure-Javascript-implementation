var solve = function (n) {
	let temp = n;
	let count = 0;
	while (temp % 10 == 0) {
		temp = temp / 10;
		count++;
	}
	return count;
};
console.log(solve(100));
