var solve = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			let a = 0;
			let b = arr[i].length - 1;
			while (a < b) {
				let temp = arr[i][b];
				arr[i][b] = arr[i][a];
				arr[i][a] = temp;
				b--;
				a++;
			}
		}
		for (let j = 0; j < arr[i].length - 1; j++) {
			let a = 0;
			let b = arr[i].length - 1;
			while (a < b) {
				let temp = arr[i][b];
				arr[i][b] = arr[i][a];
				arr[i][a] = temp;
				b--;
				a++;
			}
		}
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = Math.abs(arr[i][j] - 1);
		}
	}
	return arr;
};

// Test the function
solve([
	[1, 1, 0, 0],
	[1, 0, 0, 1],
	[0, 1, 1, 1],
	[1, 0, 1, 0],
]);
