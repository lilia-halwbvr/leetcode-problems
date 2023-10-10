// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

let lengthOfLastWord = function(s) {
    let theLastWordIndex = 0
    for(let i = s.length - 1; i <= s.length; i--) {
        if(s[i] == " ") 
        continue
        theLastWordIndex += i
        break
    }
    
    let theLastWord = ""
    for(let i = theLastWordIndex; i >= 0; i--) {
        if(s[i] == " ") 
            break
        theLastWord += s[i]
    }

    let result = 0
    for(let i = 0; i < theLastWord.length; i++) {
        result += 1
        
    }

    return result
};


//console.log(getLengthOfLastWord('  te  test   '));
// console.log(getLengthOfLastWord('  te  testasd   '));

console.log(lengthOfLastWord("fly me   to   the moon   "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord("     "));
console.log(lengthOfLastWord("mom "));
