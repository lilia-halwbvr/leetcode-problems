var appendCharacters = function (s, t) {
    let tlength = t.length
    let j = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == t[j]) {
            j++
            tlength--
        }
    }
    return tlength
};

console.log(appendCharacters("coaching", "coding")) //4
console.log(appendCharacters("abcde", "a")) //0
console.log(appendCharacters("z", "abcde")) //5