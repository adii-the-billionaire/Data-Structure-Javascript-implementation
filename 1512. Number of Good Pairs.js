//[1,2,3,1,1,3]
var solve = function (arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
			}
		}
	}
	return count;
};
console.log(solve([1, 1, 1, 1]));
