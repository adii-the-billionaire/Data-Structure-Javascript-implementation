var solve = function ( arr ) {
    let arr1 = []
   
    for ( let i = 0; i < arr.length; i++ ) {
        let ans = 0
        for ( let j = 0; j < arr[ i ].length; j++ ){
            ans +=arr[i][j]
        }
        arr1[i] = ans
    }
   
    let max =arr1[0];
    for ( let i = 0; i < arr1.length; i++ ){
        if(arr[i]>max) max=arr[i]
    } 
   
    return max
}
console.log( solve( [ [ 122, 2, 1 ], [ 1, 2, 3 ], [ 4, 5, 6 ] ] ) )
