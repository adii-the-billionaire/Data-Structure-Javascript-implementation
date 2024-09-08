function topKFrequent(arr, N, K) {
	let mp = new Map();

	for (let i = 0; i < N; i++) {
		if (mp.has(arr[i])) {
			mp.set(arr[i], mp.get(arr[i]) + 1);
		} else {
			mp.set(arr[i], 1);
		}
		if (mp.get(arr[i]) == K) {
			return arr[i];
		}
	}
}
console.log(topKFrequent([3, 1, 4, 4, 5, 2, 6, 1], 8, 2));
