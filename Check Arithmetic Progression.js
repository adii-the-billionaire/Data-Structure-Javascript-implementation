var solve = function (array) {
	if (array.length == 1) return true;
	array.sort();
	let d = array[1] - array[0];
	for (let i = 2; i < array.length; i++)
		if (array[i] - array[i - 1] != d) return false;

	return true;
};
console.log(solve([12, 40, 11, 20]));
