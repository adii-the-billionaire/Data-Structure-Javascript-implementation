var countBits = function (n) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push(binary1Count(i));
	}

	function binary1Count(i) {
		let a = i.toString(2);
		let count = 0;
		for (let j = 0; j < a.length; j++) {
			count = count + parseInt(a[j]);
		}
		return count;
	}
	return arr;
};
console.log(countBits(5));
