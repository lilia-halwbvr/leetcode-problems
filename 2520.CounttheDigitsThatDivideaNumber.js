var countDigits = function(num) {
    let num1 = Array.from(String(num))
    let digits = 0
    for(let i = 0; i <= num1.length; i++) {
        if(num % num1[i] === 0) {
            digits+=1
        }
    }
    return digits
};

console.log(countDigits(7)) //1
console.log(countDigits(121)) //2