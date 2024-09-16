var shipWithinDays = function (weights, days) {
	let D = days;
	let N = weights.length;
	let sum = 0;
	let max = 0;

	for (let i = 0; i < N; i++) {
		if (weights[i] > max) {
			max = weights[i];
		}
		sum += weights[i];
	}

	let low = max,
		high = sum;
	let ans = 0;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (func(mid, weights, N, D) === true) {
			ans = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return ans;
}; // Moved outside the while loop

function func(capacity, weights, N, D) {
	let sum = 0;
	let day = 1;

	for (let i = 0; i < N; i++) {
		if (sum + weights[i] <= capacity) {
			sum += weights[i];
		} else {
			day++;
			sum = weights[i];
		}
	}
	return day <= D;
	// if (D >= day) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
