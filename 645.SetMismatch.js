var findErrorNums = function(nums) {
    let arr = []
    let answer = []

    for(let i = 0; i < nums.length; i++) {
        if(!arr.includes(nums[i])) {
            arr.push(nums[i])
        } else {
            answer.push(nums[i])
        }
    }

    for(let i = 1; i <= nums.length; i++) {
        if(!nums.includes(i)) {
            answer.push(i)
        }
    }
    return answer
};


// console.log(findErrorNums([1,2,2,4])) //[2,3]
console.log(findErrorNums([2,2])) //[2, 1]