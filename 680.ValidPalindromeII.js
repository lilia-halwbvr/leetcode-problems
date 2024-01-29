var validPalindrome = function(s) {
    let start = 0
    let end = s.length - 1
    while(start < end) {
        if(s[start] !== s[end]) {
            return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end -1)
        }
        start++, end--
    }
    return true
};

function isPalindrome(s, st, end) {
    while(st < end) {
        if(s[st] !== s[end]) {
            return false
        }
        start++, end--
    }
    return true
}

console.log(validPalindrome("aba")) //true
console.log(validPalindrome("abca")) //true
console.log(validPalindrome("abc")) //false