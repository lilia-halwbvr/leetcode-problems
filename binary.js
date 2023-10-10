var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    if(target > nums[end]) {
        return end + 1
    } else if (target < nums[0]) {
        return 0
    }

while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if(target < nums[middle]) {
        end = middle - 1
    } else if(target > nums[middle]) {
        start = middle + 1
    } else {
        return middle
    }
}

return start
    
};