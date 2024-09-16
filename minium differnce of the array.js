var findMinDifference = function (arr) {
	let min = 61;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let c = Math.abs(arr[i] - arr[j]);
			min = Math.min(min, c);
		}
	}
	return min;
};

console.log(findMinDifference([2, 5, 7, 1]));
