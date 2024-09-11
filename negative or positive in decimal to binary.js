function dec2Bin(dec) {
    let temp = "";
    let count = 0;
    if (dec > 0) {
        temp = dec.toString(2);
    } else {
        //make the number positive
        dec = Math.abs(dec);
        //get the first compliment
        var res =
            dec ^ parseInt(new Array(dec.toString(2).length + 1).join("1"), 2);
        //get the second complimet
        temp = (res + 1).toString(2);
    }

    //console.log(temp.length);
    while () {
        temp = temp % 10;
        count++;
    }
    return count;
}

console.log(dec2Bin(18));