var differenceOfSum = function(nums) {
    let elementSum = 0
    for(let i = 0; i < nums.length; i++) {
        elementSum += nums[i]
    }

    let newArr = nums.join('') // '11563'

    newArr = Array.from(newArr)
    newArr = newArr.map(Number)
   
    let digitSum = 0
    for(let j = 0; j < newArr.length; j++) {
        digitSum += newArr[j]
    }

   return elementSum - digitSum
};


console.log(differenceOfSum([1,15,6,3])) // 9
console.log(differenceOfSum([1,2,3,4])) // 0