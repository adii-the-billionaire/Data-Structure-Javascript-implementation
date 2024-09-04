var solve = function (arr, k) {
	let c = {};
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
			}
		}
	}
	console.log(count);
	return -1;
};

solve([1, 7, 4, 3, 4, 8, 7], 2);
