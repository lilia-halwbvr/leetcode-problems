let isPowerOfTwo = function(n) {
    if(n < 1) {
        return false
    }
    while(n != 1) {
        if(n % 2 != 0) {
            return false
        }
        n = n / 2
    }
    return true
    // if(n == 1) {
    //     return true
    // }
    
    // for(let i = 2; i > 0 ; ) {
    //     if(n % i == 0) {
    //         n = n % i 
    //     }
    //     continue
    // }
    // if(n == 1) {
    //     return true 
    // }
   
    // return false 
};

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(6)) // false
console.log(isPowerOfTwo(8)) // true
console.log(isPowerOfTwo(9)) // false
console.log(isPowerOfTwo(0)) //
