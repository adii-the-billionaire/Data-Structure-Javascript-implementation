//loop
function fun1(n) {
	let m = 0;
	for (let i = 0; i < n; i++) {
		m += 1;
		console.log(m);
	}
	return m;
}
console.log(`Number of instruction is ${fun1(100)}`);

//nested loop
function fun2(n) {
	let m = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			m += 1;
		}
	}
	return m;
}
console.log(`Number of nested loop instruction is ${fun2(100)}`);
