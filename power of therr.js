var isPowerOfThree = function (n) {
	if (n <= 0 || n == 1) return false;
	let temp = n;
	if (n % 3 == 0) {
		while (temp % 3 == 0) {
			temp = Math.floor(temp / 3);
			if (temp == 1) {
				return true;
				break;
			}
		}
	}
	return false;
};
console.log(isPowerOfThree(27));
