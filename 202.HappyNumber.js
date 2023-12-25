// var isHappy = function(n) {
//     let result = isDigit(n)
//     if(result === 1 || result === 7) {
//         return true
//     } else {
//         isDigit(result)
//     }
// };


// function isDigit(num) {
//     let sum = 0
//     while(num) {
//         num = num % 10
//         sum = num**2
//         num = num / 10
//     }
//     return sum
// }







var isHappy = function(n) {
    while(n >= 10) {
       n = getNextNumber(n)
    }
    return n === 1 || n === 7
}


function getNextNumber(n) {
    let sum = 0
    while(n) {
        let num = n % 10
        sum += num**2
        n = Math.floor(n / 10)
    }
    return sum
}

console.log(isHappy(19)) //true 
console.log(isHappy(2))//false



