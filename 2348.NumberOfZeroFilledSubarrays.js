var zeroFilledSubarray = function (nums) {
    let ans = 0
    let subArrays = 0

    for (let num of nums) {
        if (num === 0) {
            subArrays++
        } else {
            subArrays = 0
        }

        ans += subArrays
    }

    return ans
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])) //6
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0])) //9