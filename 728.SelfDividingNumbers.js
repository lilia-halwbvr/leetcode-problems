var selfDividingNumbers = function(left, right) {
    let result = []

    for(let i = left; i <= right; i++) {
        if(isSelfDividing(i)) {
            result.push(i)
        }
    }

    return result

};

function isSelfDividing(n) {
    let num = n
    let array = [];
    while(n > 0) {
        array.unshift(n % 10);
        n = Math.floor(n / 10)
    }
    
    for(let i = 0; i < array.length; i++) {
        if(num % array[i] !== 0) {
            
            return false
        } 
    }
    return true
}



console.log(selfDividingNumbers(1, 22)) //[1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)) //[48,55,66,77]
console.log(selfDividingNumbers(1, 9)) //work

// A self-dividing number is not allowed to contain the digit zero.