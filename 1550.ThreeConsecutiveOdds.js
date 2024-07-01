var threeConsecutiveOdds = function (arr) {
    let count = 0

    for (num of arr) {
        if (num % 2 !== 0) {
            count++
            if (count === 3) {
                return true
            }
        } else {
            count = 0
        }

    }
    return false
};


console.log(threeConsecutiveOdds([2, 6, 4, 1])) //false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])) //true