var wordPattern = function(pattern, s) {
    let pat = pattern.split('')
    let str = s.split(' ')

    return pat
};

console.log(wordPattern("abba",  "dog cat cat dog")) // true
// console.log(wordPattern("abba",  "dog cat cat fish")) //false
// console.log(wordPattern("aaaa", "dog cat cat dog")) // false