var findMaxConsecutiveOnes = function(nums) {
    let ans = []
    let max = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            max++
        } else {
            ans.push(max)
            max = 0
        }
    }
    ans.push(max)
    return Math.max(...ans)
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) //3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])) //2