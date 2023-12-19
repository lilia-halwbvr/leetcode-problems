var subtractProductAndSum = function(n) {
    let myFn = num => Number(num)
    let digits = Array.from(String(n), myFn)
     return  digits.reduce((acc, n) => acc *= n, 1) - digits.reduce((acc, n) => acc += n, 0) 
    
};



console.log(subtractProductAndSum(234)) // 15
console.log(subtractProductAndSum(4421)) // 21