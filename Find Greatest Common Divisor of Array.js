var findGCD = function (nums) {
	nums.sort((a, b) => a - b);
	let i = 0;
	let j = nums.length - 1;
	let smallest = nums[i];
	let largest = nums[j];

	let hcf = 1;

	for (let i = 1; i <= smallest; i++) {
		if (smallest % i === 0 && largest % i === 0) {
			hcf = i;
		}
	}
	return hcf;
};
