var reverseWords = function(s) {
    let arr = [...s];
    // trim trailing, leading and consecutive spaces within
    while (arr[0] === " ") arr.shift();
    while (arr[arr.length - 1] === " ") arr.pop();
    let i = 0,
        j = arr.length;
    while (i < j) {
        if (arr[i] === arr[i + 1] && arr[i] === " ") {
            arr.splice(i, 1);
            i--;
        }
        i++;
    }
    // reverse
    (i = 0), (j = arr.length - 1);
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    // reverse each word in string (groups of non-space characters)
    let tracker = 0;
    i = 0;
    n = arr.length;
    while (i < n) {
        if (arr[i] === " ") {
            let left = tracker,
                right = i - 1;
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
            tracker = i + 1;
        }
        i++;
    }
    // ~~~~~reverse last word in string~~~~
    let left = tracker,
        right = i - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join("");
};

console.log(reverseWords());