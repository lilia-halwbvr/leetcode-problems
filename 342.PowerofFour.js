var isPowerOfFour = function(n) {
    
    while(n && n % 4 === 0) {
        n = n / 4
        
    }

    return n === 1
    
};


console.log(isPowerOfFour(1))
console.log(isPowerOfFour(4))
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(64))
console.log(isPowerOfFour(256)) //true
console.log(isPowerOfFour(0))
console.log(isPowerOfFour(45))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(100))
console.log(isPowerOfFour(343))
