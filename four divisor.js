//[21,4,7]
var solve = function (array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		let count = 0;
		let sum1 = 0;
		for (let j = 1; j <= 21; j++) {
			if (array[i] % j == 0) {
				count++;
				sum1 = sum1 + j;
			}
		}
		if (count == 4) {
			sum = sum + sum1;
		}
	}
	return sum;
};

console.log(solve([7286, 18704, 70773, 8224, 91675]));
