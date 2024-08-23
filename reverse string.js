var solve = function (s) {
	let arr = s.split(" ");
	let str = "";
	for (let i = s.length - 1; i >= 0; i--) {
		if (arr[i] == "") continue;
		if (str.length > 0) str += " ";
		str += arr[i];
	}
	return str;
};
console.log(solve("the is man"));
