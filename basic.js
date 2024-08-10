//single loop
function fun1(n) {
	let m = 0;
	let k = 0;
	for (let i = 0; i < n; i++) {
		m += 1;
		k += i;
	}
	console.log();
	return m;
}

var mia = `Number of instructions is ${fun1(10)}`;
console.log(mia);
