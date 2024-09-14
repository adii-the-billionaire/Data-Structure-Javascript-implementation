var chalkReplacer = function (chalk, k) {
	let kk = k;
	let b = 0;

	while (kk > 0) {
		for (let i = 0; i < chalk.length; i++) {
			kk = kk - chalk[i];
			if (kk <= 0) {
				b = i;
				break;
			}
		}
	}
	return b;
};
console.log(chalkReplacer([7, 7, 7], 2));
