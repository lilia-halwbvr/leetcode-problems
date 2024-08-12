var finalString = function (s) {
    let ans = []
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'i') {
            ans.reverse()
        } else {
            ans.push(s[i])
        }
    }
    return ans.join('')
};

console.log(finalString("string")) //"rtsng"
console.log(finalString("poiinter")) //"ponter"