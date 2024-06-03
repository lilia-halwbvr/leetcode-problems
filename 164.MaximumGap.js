var maximumGap = function(nums) {
    if(nums.length < 2) return 0
    nums = nums.sort((a, b) => a - b)

    let maxGap = 0
    for(let i = 1; i < nums.length; i++) {
        maxGap = Math.max(maxGap, nums[i] - nums[i - 1])
    }
    return maxGap
};

console.log(maximumGap([3,6,9,1]))//3
console.log(maximumGap([10]))//0