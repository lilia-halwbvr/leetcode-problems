var averageValue = function(nums) {
    let numbers = []
    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] % 3 === 0 && nums[i] % 2 === 0) {
            numbers.push(nums[i])
        }
    }
    if(numbers.length === 0) return 0
    let sumOfNums = numbers.reduce((sum, current) => sum + current, 0)
    return Math.floor(sumOfNums / numbers.length)
};

console.log(averageValue([1,3,6,10,12,15])) //9
console.log(averageValue([1,2,4,7,10])) //0
