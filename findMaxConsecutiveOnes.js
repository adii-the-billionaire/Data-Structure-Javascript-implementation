var findMaxConsecutiveOnes = function (nums) {
	let n = nums.length;
	let curr = 0,
		mx = 0;
	for (let i = 0; i < n; i++) {
		if (nums[i] == 1) {
			curr++;
		} else {
			mx = max(curr, mx);
			curr = 0;
		}
	}
	return max(mx, curr);
};
