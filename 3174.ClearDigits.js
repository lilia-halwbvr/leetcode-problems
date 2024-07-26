var clearDigits = function (s) {
    let regexs = /[a-z][0-9]/
    while (regexs.test(s)) {
        s = s.replace(regexs, "")
    }
    return s
};

console.log(clearDigits("abc")) //"abc"
console.log(clearDigits("cb34")) //""