var commonFactors = function(a, b) {
    let theSmallestNumber = 0
    let theBiggestNumber = 0
    let arr = []
    if(a > b) {
        theSmallestNumber = b
        theBiggestNumber = a
    } else {
        theSmallestNumber = a
        theBiggestNumber = b
    }

    for(let i = 1; i <= theSmallestNumber; i++) {
        if(theSmallestNumber % i === 0 && theBiggestNumber % i === 0) {
            arr.push(i)
        } else {
            continue
        }
    }

    return arr.length
};

console.log(commonFactors(12, 6)) //4
console.log(commonFactors(25, 30))//2