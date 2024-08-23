var solve = function (str1, str2) {
	let n1 = str1.length;
	let n2 = str2.length;

	// If length of both strings is not same, then they cannot be anagram
	if (n1 !== n2) {
		return false;
	}

	// Convert strings to arrays of characters, sort them, and convert back to strings
	let sortedStr1 = str1.split("").sort();
	console.log(sortedStr1);
	let sortedStr2 = str2.split("").sort().join("");

	// Compare sorted strings
	for (let i = 0; i < n1; i++) {
		if (sortedStr1[i] !== sortedStr2[i]) {
			return false;
		}
	}

	return true;
};
solve("ava", "vaa");
