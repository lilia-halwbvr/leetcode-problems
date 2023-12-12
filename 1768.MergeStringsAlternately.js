var mergeAlternately = function(word1, word2) {
    let maxWord = Math.max(word1.length, word2.length)
    let result = []

    for(let i = 0; i < maxWord; i++) {
        result.push(word1[i])
        result.push(word2[i])
    }

    return result.join('')
};

console.log(mergeAlternately("abc", "pqr")) //"apbqcr"
console.log(mergeAlternately("ab", "pqrs")) //"apbqrs"
console.log(mergeAlternately("abcd", "pq")) //"apbqcd"
