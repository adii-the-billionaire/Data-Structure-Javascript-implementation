var solve = function (n) {
	let sum = 0;
	let temp = n;
	while (temp != 1) {
		if (temp % 2 == 0) {
			temp = temp / 2;
			sum = sum + temp;
			//console.log(sum);
		} else {
			let m = (temp - 1) / 2;
			sum = sum + m;
			temp = m + 1;
			//console.log(sum);
		}
	}
	return sum;
};
console.log(solve(14));
