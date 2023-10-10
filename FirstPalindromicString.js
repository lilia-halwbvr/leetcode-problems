let firstPalindrome = function(words) {
    for(let word of words) {
        
        if(isPalindrome(word) ) {
            return word
        }
    }
    return ""
};

 function isPalindrome(word) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] !== word[word.length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
console.log(firstPalindrome(["notapalindrome","racecar"]))
console.log(firstPalindrome(["def","ghi"]))