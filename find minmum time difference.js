// Input: timePoints = ["23:59","00:00"]
// Output: 1
// Example 2:

// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0
var findMinDifference = function (timePoints) {
	//finding minium time differnce
	let min = 61;
	let arr = [];
	for (let i = 0; i < timePoints.length; i++) {
		let a = "";
		//console.log( timePoints[ i ].length );
		for (let j = 3; j < 5; j++) {
			a = a + timePoints[i][j];
		}
		arr.push(parseInt(a));
	}
	//now the difference of the array
	var findMinDifferenceSecond = function (arr, min) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = i + 1; j < arr.length; j++) {
				let c = Math.abs(arr[i] - arr[j]);
				min = Math.min(min, c);
			}
		}
		return min;
	};
	return findMinDifferenceSecond(arr, min);
};
console.log(findMinDifference(["00:52", "23:59", "00:00"]));
