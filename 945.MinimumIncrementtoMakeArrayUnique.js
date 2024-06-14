var minIncrementForUnique = function (nums) {
    nums = nums.sort((a, b) => a - b)

    let count = 0
    let current = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= current) {
            count += current - nums[i] + 1
        }
        current = Math.max(current + 1, nums[i])
    }
    return count
}
console.log(minIncrementForUnique([1, 2, 2])) //1
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])) //6