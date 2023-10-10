var findTheDifference = function(s, t) {
    s = s.split('').sort()
    t = t.split('').sort()
    
    for(let i = 0; i < t.length; i++) {
        if(s[i] != t[i]) {
            return t[i]
        }
    }
    return ''
};

console.log(findTheDifference('abcd', 'abcde')) //e
console.log(findTheDifference('', 'y'))//y
console.log(findTheDifference('asd', 'asfd'))//f
