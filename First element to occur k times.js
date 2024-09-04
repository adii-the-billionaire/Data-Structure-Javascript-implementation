var solve = function (input) {
	let pd = 0;
	let sd = 0;
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			if (i == j) {
				pd += input[i][j];
			}
			if (i + j == input.length - 1) {
				sd += input[i][j];
			}
		}
	}
	let n = input.length;
	if (n % 2 == 0) {
		return pd + sd;
	} else {
		let a = Math.floor(n / 2);
		let b = input[a][a];
		return pd + sd - b;
	}
};
console.log(
	solve([
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
	]),
);
