var permut = function ( nums ) {
    let n = nums.length / 2
 
    for ( let i = 0; i < nums.length; i++ ){
         let curNum = nums[ i ]
        let currPos = i;
        while ( curNum > 0 ) {
            let newPos = 0
            if ( currPos < n ) {
                newPos = 2*currPos
            } else {
                newPos = 2*(currPos-n)+1
            }
            let newNumber = nums[ newPos ]
            nums[ newPos ] = -curNum
            console.log(nums)
            curNum = newNumber
            currPos = newPos
        }
    }
    for ( let i = 0; i < nums.length; i++ ){
        nums[i] = -nums[i]
    }
    return nums
    
}
console.log(permut([2,4,6,8,10,12]))