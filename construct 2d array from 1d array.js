var construct2DArray = function (original, m, n) {
	//array nested is responsible m
	//nested array element responsible n
	let arr = [];
	if ((m == 1 && n == 1) || original.length < n) {
		return [];
	}

	for (let i = 0; i < m; i++) {
		arr.push([]);
		for (let j = 0; j < n; j++) {
			arr[i][j] = original[0];
			original.shift();
		}
	}

	return arr;
};
console.log(construct2DArray([1], 1, 1));

// Input: (original = [1, 2, 3, 4]), (m = 2), (n = 2);
// Output: [
// 	[1, 2],
// 	[3, 4],
// ];
