var solve = function ( arr1, arr2 ) {
    if(arr1.length!=arr2.length)return false
    let a = arr1.sort()
    let b = arr2.sort()
    for ( let i = 0; i < arr1.length; i++ ){
        if ( a[ i ] === b[ i ] ) continue
        else {
            return false
        }
    }
    return true
}
console.log(solve([2,1,2],[1,2,3]))