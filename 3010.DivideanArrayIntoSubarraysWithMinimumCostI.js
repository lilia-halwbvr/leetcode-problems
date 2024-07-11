var minimumCost = function (nums) {
    let sum = nums[0]
    nums.shift()
    nums = nums.sort((a, b) => a - b)
    sum += nums[0]
    sum += nums[1]
    return sum
};

console.log(minimumCost([1, 2, 3, 12])) //6
console.log(minimumCost([5, 4, 3])) //12