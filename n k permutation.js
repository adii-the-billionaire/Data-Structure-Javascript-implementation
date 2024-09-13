// This is a simple approach of probability:

// The explainattion goes something like this:
// n= 4, k =9

// We have an array = [1, 2, 3, 4]
// and then we have 4 empty spaces to fill

// So considering that we are filling in position one with any of the numbers, we will then have a possibility of filling out the other 3 places by 3! ways.

// let's say we choose 1 to be put in position 1. Therefore 1 can be tied with 3! other solutions. We then can safely assume that if we choose 1 in position 1, then we will eliminate 6 possibilities.
// 1 : 1 - 6
// 2 : 7 - 12
// 3: 13 - 18
// But we have 9 as the value of k, that means that we will have to go up the array and choose 2.

// The array now becomes [1, 3, 4] as 2 was already picked up to be placed at position 1.

// Now that we have made a good assumption of choosing 2, we narrowed down our search. We can then go to the next place and hence we will also have to narrow down our search space
// hence : k = k % 2!

// we did 2! as there are 3 places to be filled in and we are checking which block of combinations it will fit in

// We can keep repeating these steps till we have a value in arr.

var getPermutation = function(n, k) {
    const factorials = { 0: 1 };
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        factorials[i] = factorials[i - 1] * i;
    }
    const KthComb = [];
    k--;
    while (arr.length > 0) {
        const availableLen = arr.length - 1;
        let swapValue = Math.floor(k / factorials[availableLen]);
        KthComb.push(arr[swapValue]);
        arr.splice(swapValue, 1);
        const remainder = k % factorials[availableLen];
        k = k % factorials[availableLen];
    }

    return KthComb.join("");
};