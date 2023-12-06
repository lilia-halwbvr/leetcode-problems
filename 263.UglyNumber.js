var isUgly = function(n) {
    if(n <= 0) return false
    
    while(n != 1) {
        if(n % 2 === 0) {
            n /= 2
        } else if(n % 3 === 0) {
            n /= 3
        } else if (n % 5 === 0) {
            n /= 5
        } else {
            return false
        }
    }

    return true
};

console.log(isUgly(6)) //true
console.log(isUgly(1)) //true
console.log(isUgly(14)) //false