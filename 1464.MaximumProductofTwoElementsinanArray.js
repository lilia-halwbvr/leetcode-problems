var maxProduct = function (nums) {
    nums = nums.sort((a, b) => b - a)
    let prod = (nums[0] - 1) * (nums[1] - 1)
    return prod
};

console.log(maxProduct([3, 4, 5, 2])) //12
console.log(maxProduct([1, 5, 4, 5])) //16