var solve = function (n, m, input) {
	const rows = m;
	const columns = n;
	const matrix = Array.from({ length: rows }, () => new Array(columns).fill(0));

	let count = 0;

	//for row side
	for (let i = 0; i < input.length; i++) {
		let a = input[i][0]; //for row side
		for (let j = 0; j < matrix.length; j++) {
			matrix[a][j] += 1;
		}
	}
	//for coloumns side
	for (let i = 0; i < input.length; i++) {
		let a = input[i][1];
		for (let j = 0; j < matrix.length; j++) {
			matrix[j][a] += 1;
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] % 2 != 0) {
				count++;
			}
		}
	}

	return count;
};

console.log(
	solve(2, 3, [
		[0, 1],
		[1, 1],
	]),
);
