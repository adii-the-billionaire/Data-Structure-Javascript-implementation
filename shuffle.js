var shuffle = function ( arr ) {
    let end = arr.length;
    let mid = end / 2;
    let i = 1;
    let j = mid;
    while ( i < mid && j < end ) {
        let temp = arr[ i ]
        arr[ i] = arr[ j ]
        arr[ j ] = temp
        i++
        j++
    }
    return arr
}

console.log(shuffle([1,2,3,4,5,6]))
