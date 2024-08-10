// // //solving the pallindrome number is
// // var solve = function (x) {
// // 	let rev = 0;
// // 	let temp = x;
// // 	while (temp > 0) {
// // 		let id = temp % 10;

// // 		rev = rev * 10 + id;

// // 		temp = parseInt(temp / 10);
// // 	}

// // 	if (rev == x) {
// // 		return true;
// // 	}
// // 	return false;
// // };
// // console.log(solve(131));

// // n sum of the addd
// // function printSquare(size) {
// // 	for (let i = 1; i <= size; i++) {
// // 		let line = "";
// // 		for (let j = 1; j <= size; j++) {
// // 			line += "*  ";
// // 		}
// // 		console.log(line);
// // 	}
// // }
// // printSquare(4);
// var solve = function (n) {
// 	var arr = [];
// 	for (let i = 0; i < n; i++) {
// 		let arr1 = [];
// 		for (j = 0; j < n; j++) {
// 			arr1.push("*");
// 		}
// 		arr.push(arr1);
// 	}
// 	return arr;
// };
// console.log(solve(4));
//	reverse string problems
console.log("hi");
