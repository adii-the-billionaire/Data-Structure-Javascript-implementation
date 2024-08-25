var solve = function (array) {
	array.sort((a, b) => a - b);
	var c = [];
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
		c.push(array[j]);
		c.push(array[i]);
		j--;
		i++;
	}
	if (i == j) {
		c.push(array[i]);
	}
	return c;
};
console.log(solve([4, 5, 1, 2, 7]));
