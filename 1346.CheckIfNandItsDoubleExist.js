var checkIfExist = function (arr) {
    let ans = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] && i != j) {
                ans = true
            }
        }
    }
    return ans
};

console.log(checkIfExist([10, 2, 5, 3])) //true
console.log(checkIfExist([3, 1, 7, 11])) //false