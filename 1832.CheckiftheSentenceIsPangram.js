var checkIfPangram = function(sentence) {
    let str = sentence.split('')
    let strToSet = [...new Set(str)];

    return strToSet.length === 26
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) //true
console.log(checkIfPangram("leetcode")) //false