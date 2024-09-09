// //here is the transpose of the matrix
// function transpose(A, B) {
// 	var i, j;
// 	for (i = 0; i < N; i++) for (j = 0; j < N; j++) B[i][j] = A[j][i];
// }

// // Driver code

// var A = [
// 	[1, 1, 1, 1],
// 	[2, 2, 2, 2],
// 	[3, 3, 3, 3],
// 	[4, 4, 4, 4],
// ];

// var B = Array(N);
// for (i = 0; i < N; i++) B[i] = Array(N).fill(0);

// transpose(A, B);

//here is the problems to solve using the space 1

var N = 4;

// Finds transpose of A in-place
function transpose(A) {
	for (i = 0; i < N; i++)
		for (j = i + 1; j < N; j++) {
			var temp = A[i][j];
			A[i][j] = A[j][i];
			A[j][i] = temp;
		}
}
