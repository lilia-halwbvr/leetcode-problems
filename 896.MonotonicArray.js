var isMonotonic = function(nums) {
    return isDecreasing(nums) || isIncreasing(nums)
};

function isIncreasing(nums) {
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) return false
    }

    return true
}

function isDecreasing(nums) {
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) return false
    }

    return true
}


console.log(isMonotonic([1,2,2,3])) //true
console.log(isMonotonic([6,5,4,4])) //true
console.log(isMonotonic([1,3,2])) //false