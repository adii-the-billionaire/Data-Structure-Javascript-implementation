// //count frequency
// var canArrange = function (arr, k) {
// 	let count = arr.length / 2;
// 	console.log(count);
// 	let rcount = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			// if (arr[i] + (arr[j] % k) == 0) {
// 			// 	rcount++;
// 			// }
// 			let a = arr[i] + arr[j];
// 			if (a % k == 0) {
// 				rcount++;
// 			}
// 		}
// 	}

// 	if (rcount >= count) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));

var canArrange = function (arr, k) {
	let count = arr.length / 2;
	console.log(count);
	let rcount = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let a = arr[i] + arr[j];
			if (a % k == 0) {
				rcount++;
			}
		}
	}

	if (rcount >= count) {
		return true;
	} else {
		return false;
	}
};
console.log(canArrange([-1, -1, -1, -1, 2, 2, -2, -2], 3));
