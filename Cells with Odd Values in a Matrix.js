const rows = 2;
const columns = 3;
const matrix = Array.from({ length: rows }, () => new Array(columns).fill(0));
//console.log(matrix);
let indices = [
	[0, 1],
	[1, 1],
];

//for row side
for (let i = 0; i < indices.length; i++) {
	let a = indices[i][0]; //for row side
	for (let j = 0; j <= matrix.length; j++) {
		matrix[a][j] += 1;
	}
}
//for coloumns side
for (let i = 0; i < indices.length; i++) {
	let a = indices[i][1];
	for (let j = 0; j < matrix.length; j++) {
		matrix[j][a] += 1;
	}
}

console.log(matrix);
