var isSameAfterReversals = function (num) {
    if (num == 0) {
        return true
    }
    let number = String(num)
    let resultOfReversal = reverse(number)
    let resultWithoutZeroes = ""

    let startOfRealString = 0
    while (resultOfReversal[startOfRealString] === '0') {
        startOfRealString++;
    }

    for (let i = startOfRealString; i < resultOfReversal.length; i++) {
        resultWithoutZeroes += resultOfReversal[i]
    }

    let doubleReversalNumber = reverse(resultWithoutZeroes)
    let result = Number(doubleReversalNumber)
    if (result == num) {
        return true
    }
    return false
}

function reverse(s) {
    let result = ""
    for (let i = 1; i <= s.length; i++) {
        result += s[s.length - i]
    }
    return result
}


console.log(isSameAfterReversals(609576)) // true
console.log(isSameAfterReversals(39809218310)) //false
console.log(isSameAfterReversals(505)) //true
console.log(isSameAfterReversals(0)) // true
console.log(isSameAfterReversals(5500)) //false



// var fib = function(n) {
//     if(n == 1 || n == 2) {
//         return 1
//     }
//     let prevNumber1 = 1
//     let prevNumber2 = 1
//     let fibNumber 
//     for(let i = 0; i < n - 2; i++) {
//         fibNumber = prevNumber1 + prevNumber2
//         prevNumber1 = prevNumber2
//         prevNumber2 = fibNumber
//     }
//     return fibNumber
// };

// console.log(fib(2))
