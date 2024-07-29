var canAliceWin = function (nums) {
    let single = []
    let double = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            single.push(nums[i])
        } else {
            double.push(nums[i])
        }
    }
    console.log(double)
    let initialVal = 0
    let singleSum = single.reduce((acc, curr) => acc + curr, initialVal)
    let doubleSum = double.reduce((acc, curr) => acc + curr, initialVal)
    return singleSum !== doubleSum
};
console.log(canAliceWin([1, 2, 3, 4, 10])) //false 
console.log(canAliceWin([1, 2, 3, 4, 5, 14])) //true