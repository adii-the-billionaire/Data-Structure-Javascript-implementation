const rows = 2;
const columns = 3;
const matrix = Array.from({ length: rows }, () => new Array(columns).fill(0));
//console.log(matrix);
let indices = [
	[0, 1],
	[1, 1],
];
let count = 0;

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

for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		if (matrix[i][j] % 2 != 0) {
			count++;
		}
	}
}

console.log(matrix);
console.log(count);
