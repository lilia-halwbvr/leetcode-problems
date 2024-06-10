var heightChecker = function (heights) {
    let sorted = [...heights].sort((a, b) => a - b)
    let ans = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            ans++
        }
    }
    return ans
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])) //3
console.log(heightChecker([5, 1, 2, 3, 4])) //5
console.log(heightChecker([1, 2, 3, 4, 5])) //0