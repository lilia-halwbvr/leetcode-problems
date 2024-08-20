var filter = function (arr, fn) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            ans.push(arr[i], i)
        }
    }
    return ans
};