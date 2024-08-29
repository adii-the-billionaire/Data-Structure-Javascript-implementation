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
			arr[i][j] = Math.abs(arr[i][j] - 1);
		}
	}
	return console.log(arr);
};

solve([
	[1, 1, 0],
	[1, 0, 1],
	[0, 0, 0],
]);
