var chalkReplacer = function (chalk, k) {
	let n = chalk.length;

	let prefixSum = [];
	prefixSum[0] = chalk[0];
	for (let i = 1; i < n; i++) {
		prefixSum[i] = prefixSum[i - 1] + chalk[i];
	}

	let sum = prefixSum[n - 1];
	let remainingChalk = k % sum;

	return binarySearch(prefixSum, remainingChalk);
};

var binarySearch = function (arr, tar) {
	let low = 0,
		high = arr.length - 1;

	while (low < high) {
		let mid = Math.floor(high + low / 2);

		if (arr[mid] <= tar) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	return high;
};

console.log(chalkReplacer([5, 1, 5], 22));
