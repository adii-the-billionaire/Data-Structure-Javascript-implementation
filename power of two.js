var solve = function (n) {
	if (n < 0) {
		return false;
	}
	if (n === 1) {
		return false;
	}
	while (n % 2 == 0) {
		n = parseInt(n / 2);
	}
	if (n == 1) {
		return true;
	} else {
		return false;
	}
};
