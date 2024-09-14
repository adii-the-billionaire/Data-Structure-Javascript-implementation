var chalkReplacer = function (chalk, k) {
	let kk = k;
	let b = 0;

	while (kk > 0) {
		for (let i = 0; i < chalk.length; i++) {
			kk = kk - chalk[i];
			//console.log(kk, chalk[i]);
			if (kk < 0 || k < chalk[i]) {
				b = i;
				break;
			}
		}
	}
	return b;
};
console.log(chalkReplacer([3, 4, 1, 2], 25));
