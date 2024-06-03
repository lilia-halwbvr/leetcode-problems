var findMaxK = function(nums) {
    nums.sort((a, b) => a - b)
    for(let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i]
        if(nums.includes(-num)) return num
    }
    return -1
};

console.log(findMaxK([-1,2,-3,3])) //3
console.log(findMaxK([-1,10,6,7,-7,1])) //7