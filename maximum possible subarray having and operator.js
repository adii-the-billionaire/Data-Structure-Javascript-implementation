// Input: nums = [1, 2,2,4];
// Output: 2;

var solve = function (nums) {
	//first checking for maximum value if all the number are distinct then one subarray
	//or maximum value having duuplicates like
	let max = nums[0];
	let count = 1;
	let index = 0;
	for (let i = 1; i < nums.length; i++) {
		if (max < nums[i]) {
			max = nums[i];
			index = i;
			//console.log(index);
		}
	}
	//now check the max value have same from iterate the value

	while (index < nums.length) {
		if (nums[index] == nums[index + 1]) {
			count++;
		}
		index++;
	}
	return count;
};

console.log(solve([1, 2, 2, 2, 3, 3, 1, 5, 5, 5, 5]));
