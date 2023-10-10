let isPalindrome = function(x) {
    let number = x + ""
    for(let i = 0; i < number.length; i++) {
        if(number[i] != number[number.length - i - 1]) {
            return false
        }
    }
    return true
};


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(119911));
console.log(isPalindrome(-191));
console.log(isPalindrome(309284908239029));
console.log(isPalindrome(0));