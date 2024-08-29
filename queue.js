var solve = function (nums) {
	let i = 0;
	let j = nums.length - 1;
	while (i < j) {
		let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
		i++;
		j--;
	}
	return nums;
};
console.log(solve([1, 2, 3, 4]));
