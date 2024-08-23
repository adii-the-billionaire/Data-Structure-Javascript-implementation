var solve = function ( arr ) {
    let nar = []
    let j =0;
    for ( let i = 0; i < arr.length; i++ ){
        nar[ i ] = arr[ i ]
        j++
    }
    for ( let i = 0; i < arr.length; i++ ){
        nar[ j ] = arr[ i ]
        j++
    } 
    return nar
}
console.log(solve([1,2,3]))