var partition_algo = function (nums, l, r) {
	let p = nums[l];
	let i = l + 1;
	let j = r;

	while (i <= j) {
		if (nums[i] < p && nums[j] > p) {
			[nums[i], nums[j]] = [nums[j], nums[i]]; //[b, a] = [a, b]
			i++;
			j--;
		}

		if (nums[i] >= p) {
			i++;
		}

		if (nums[j] <= p) {
			j--;
		}
	}

	[nums[l], nums[j]] = [nums[j], nums[l]];

	return j; //P is at jth index
};

var findKthLargest = function (nums, k) {
	let n = nums.length;

	let l = 0;
	let r = n - 1;

	let pivot_idx = 0;

	while (true) {
		pivot_idx = partition_algo(nums, l, r);

		if (pivot_idx == k - 1) {
			break;
		} else if (pivot_idx > k - 1) {
			r = pivot_idx - 1;
		} else {
			l = pivot_idx + 1;
		}
	}

	return nums[pivot_idx];
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
