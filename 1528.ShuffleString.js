var restoreString = function(s, indices) {
    let newObj = {}
    for(let i = 0; i < indices.length; i++) {
        let key = indices[i]
        let value = s[i]
        newObj[key] = value;
    }
    let result = ''
    for(value in newObj) {
        result += newObj[value]
    }
    return result
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])) // "leetcode"
console.log(restoreString("abc",[0,1,2])) //"abc" 