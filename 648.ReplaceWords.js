var replaceWords = function (dictionary, sentence) {
    let sent = sentence.split(' ')
    for (let i = 0; i < sent.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            if (dictionary[j] && sent[i].startsWith(dictionary[j])) {
                sent[i] = dictionary[j]
            }
        }
    }
    return sent.join(' ')
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")) //"the cat was rat by the bat"
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")) //"a a b c"