var numSteps = function (s) {

    let ans = 0
    let flag = 0
    for (let i = s.length - 1; i; i--) {
        if (s[i] === '1') {
            ans += 2 - flag
            flag = 1
        } else {
            ans += 1 + flag
        }
    }

    return ans + flag
};

console.log(numSteps("1101")) //6
console.log(numSteps("10")) //1
console.log(numSteps("1")) //0