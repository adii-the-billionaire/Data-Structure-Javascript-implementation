// // (N >>> 0).toString(2);
// var solve = function(n) {
//     return (n >>> 0).toString(2);
// };
// console.log(solve(2));

var solve = function(n) {
    let arr = [];
    let a = 0;
    let b = 0;
    let temp = n.toString(2).padStart(32, "0");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == 1) {
            if (i % 2 == 0) {
                a++;
            } else {
                b++;
            }
        }
    }
    arr.push(b);
    arr.push(a);
    return arr;
};
console.log(solve(2));
// 0000 0000 0000 0000 0000 0000 0000 0010;