var findPeaks = function (mountain) {
    let ans = []
    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i - 1] < mountain[i] && mountain[i + 1] < mountain[i]) ans.push(i)
    }
    return ans
};

console.log(findPeaks([2, 4, 4])) //[]
console.log(findPeaks([1, 4, 3, 8, 5])) //[1,3]