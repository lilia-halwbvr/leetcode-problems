var thirdMax = function(nums) {
    let numbers = Array.from(new Set(nums.sort((a, b) => a - b)))
    if(numbers.length <= 2) return numbers[numbers.length - 1]
    return numbers[numbers.length - 3]
};

console.log(thirdMax([3,2,1])) //1
console.log(thirdMax([1,2])) //2
console.log(thirdMax([2,2,3,1])) //1
console.log(thirdMax([3,2,1,4,5]))//3