var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum = sumOfDigits(nums[i])
        if (sum === i) return i
    }

    return -1
};

console.log(smallestIndex([1, 3, 2])) // 2
console.log(smallestIndex([1, 10, 11])) // 1


function sumOfDigits(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}