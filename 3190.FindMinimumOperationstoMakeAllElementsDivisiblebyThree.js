var minimumOperations = function (nums) {
    let count = 0
    for (let num of nums) {
        if (num % 3 !== 0) count++
    }
    return count
};

console.log(minimumOperations([1, 2, 3, 4])) //3
console.log(minimumOperations([3, 6, 9])) //0