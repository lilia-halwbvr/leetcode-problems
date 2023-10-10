// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, 
// otherwise, you have to subtract 1 from it.


var numberOfSteps = function(num) {
    let result = 0
    while(num > 0) {
        if(num % 2 == 0) {
            num /= 2
            result ++
        } else {
            num--
            result++
        }
    }
    return result
};

console.log(numberOfSteps(14)) // 6
console.log(numberOfSteps(8)) // 4
console.log(numberOfSteps(123)) // 12

