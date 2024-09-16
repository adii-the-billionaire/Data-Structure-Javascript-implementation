// [
// 	[3, 3],
// 	[5, -1],
// 	[-2, 4],
// ];
var kClosest = function (points, k) {
	p = points.sort(
		(a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]),
	);
	//now by iteration sort

	console.log(p);
	res = [];
	for (let i = 0; i < k; i++) {
		res.push(p[i]);
	}
	return res;
};
console.log(
	kClosest(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		2,
	),
);
