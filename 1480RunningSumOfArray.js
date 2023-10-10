var runningSum = function(nums) {
    let finalSum = 0
    for(let i = 0;i < nums.length; i++){
        finalSum = finalSum + nums[i]
        nums[i] = finalSum
    }
    return nums
};


console.log(runningSum([1,2,3,4])) // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])) // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]