// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

// For the purpose of this problem, we will return 0 when needle is an empty string. 

let strStr = function(haystack, needle) {
    if(needle.length == 0) {
        return 0
    }
    let result = 0
    for(let i = 0; i < haystack.length && i < needle.length; i++) {
        if(haystack[i] != needle[i]) {
            return result = -1
        }
        result = i
    }
    return result
};

console.log(strStr("Hello", "ll"))