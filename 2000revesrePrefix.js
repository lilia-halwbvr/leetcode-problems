// Given a 0-indexed string word and a character ch, 
// reverse the segment of word that starts at index 0 and ends at the index 
// of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive).
//  The resulting string will be "dcbaefd".
// Return the resulting string.

var reversePrefix = function(word, ch) {
    let position = word.search(ch) + 1
    if(position == -1) {
        return word
    }

    let reverseString = word.slice(0, position)
    let lastString = word.slice(position)
    let newReverseString = ""
    
    for(let i = 1; i <= reverseString.length; i++) {
        newReverseString += reverseString[reverseString.length - i]
    }
    return newReverseString + lastString
};

 

console.log(reversePrefix("abcdefd", "d")) // "dcbaefd"
console.log(reversePrefix("xyxzxe", "z")) //"zxyxxe"
console.log(reversePrefix("abcd", "z")) // abcd так как такой буквы нет

// 1 найти искомую букву в строчке а точнее ее индекс, если ее нет вернуть срочку
// 2 сделать новую срочку без остатка сразу перевернутую
// 3 сделать слайсом остаток от строчки начиная с искомого индекса в переменной
// 4 конкатенировать получившиеся строчки
