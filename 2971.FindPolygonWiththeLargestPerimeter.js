var largestPerimeter = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let answer = -1
    let sum = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < sum) {
            answer = nums[i] + sum
        }
        sum = sum + nums[i]
    }
    return answer
};

console.log(largestPerimeter([5,5,5])) //15
console.log(largestPerimeter([1,12,1,2,5,50,3])) //12