var repeatedSubstringPattern = function(s) {
    let str = s + s
    let newStr =  str.slice(1, -1);
    return newStr.includes(s)
};

console.log(repeatedSubstringPattern("abab")) //true
console.log(repeatedSubstringPattern("aba")) //false
console.log(repeatedSubstringPattern("abcabcabcabc")) //true