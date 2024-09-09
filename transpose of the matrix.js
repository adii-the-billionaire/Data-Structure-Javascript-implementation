// function transpose1(matrix) {
// 	const transposed = [];
// 	for (let i = 0; i < matrix[0].length; i++) {
// 		transposed.push([]);
// 		for (let j = 0; j < matrix.length; j++) {
// 			transposed[i].push(matrix[j][i]);
// 		}
// 	}
// 	return transposed;
// }
// const exampleMatrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// ];
// console.log(transpose1(exampleMatrix));
var solve = function (input) {
	const transposed = [];
	for (let i = 0; i < input[0].length; i++) {
		transposed.push([]);
		for (let j = 0; j < input.length; j++) {
			transposed[i].push(input[j][i]);
		}
	}
	return transposed;
};
