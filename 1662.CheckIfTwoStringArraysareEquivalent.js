var arrayStringsAreEqual = function(word1, word2) {
    let firstWord = word1.join('')
    let secondWord = word2.join('')
    if(firstWord === secondWord) {
        return true
    }

    return false
};


console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"])) //true
console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"])) //false
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"])) //true 