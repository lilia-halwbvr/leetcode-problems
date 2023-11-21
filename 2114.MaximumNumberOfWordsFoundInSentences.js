var mostWordsFound = function(sentences) {
    let maxLength = 0;
    let n = 0;

    for(let i = 0; i < sentences.length; i++) {
        n = sentences[i].split(' ').length
       
        if(n > maxLength) {
            maxLength = n
        }
    }
    return maxLength
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))//6
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"])) // 3

