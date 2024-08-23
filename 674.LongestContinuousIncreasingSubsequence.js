var findLengthOfLCIS = function (nums) {
    let ans = 0
    let length = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            length++
        } else {
            length = 1
        }

        ans = Math.max(ans, length)
    }

    return ans
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])) //3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])) //1