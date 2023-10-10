var moveZeroes = function(nums) {
    let numsLength = nums.length
    for(let i = 0; i < numsLength; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            numsLength--
           // i--
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([0])) // [0]
