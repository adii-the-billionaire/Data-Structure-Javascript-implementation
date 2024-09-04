//using of map , has , get, set
var solve = function (array) {
	let presum = new Map();
	let sum = 0;
	let max_len = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
		if (sum == 0) {
			max_len = i + 1;
		}
		if (presum.has(sum)) {
			max_len = Math.max(max_len, i - presum.get(sum));
		} else {
			presum.set(sum, i);
		}
	}
	return max_len;
};
