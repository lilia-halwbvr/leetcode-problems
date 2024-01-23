var search = function(nums, target) {
    let lowStart = 0
    let highStart = nums.length - 1
    let mid = 0

    while(lowStart <= highStart) {
        mid = Math.floor((lowStart + highStart) / 2)
        if(nums[mid] === target){
            return mid
        } else if(nums[mid] < target) {
            lowStart = mid + 1
        } else if(nums[mid] > target) {
            highStart = mid - 1
        }
    }

    return -1
};


console.log(search( [-1,0,3,5,9,12], 9)) //4
console.log(search([-1,0,3,5,9,12], 2)) //-1