var solve = function (array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < array[i + 1]) {
			array[i] = -1;
		} else {
			array[i] = array[i + 1];
		}
		if (array[i + 1] == undefined) {
			array[i] = -1;
		}
	}

	return array;
};
console.log(solve([5, 6, 2, 3, 1, 7]));
