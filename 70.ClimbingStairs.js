var climbStairs = function(n) {

    if(n < 2) return 1

    let firstStep = 1
    let secondStep = 1
    let result = 0

    for(let i = 2; i <= n; i++) {
        result = firstStep + secondStep
        firstStep = secondStep
        secondStep = result
    }

    return result
};

console.log(climbStairs(2)) //2
console.log(climbStairs(3)) //3
console.log(climbStairs(1)) //1