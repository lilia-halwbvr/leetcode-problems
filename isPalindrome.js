


let isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'')
    s = s.toLowerCase()
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))

