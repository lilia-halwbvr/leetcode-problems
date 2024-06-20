var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[!?"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, ' ')
    paragraph = paragraph.split(/\s+/);
    paragraph = paragraph.filter(word => word !== '');

    let filteredArray = paragraph.filter(word => !banned.includes(word))
    console.log(filteredArray)
    let map = new Map()

    for (const word of filteredArray) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1)
        }
    }
    let mostCommonWord = ''
    let maxCount = 0

    for (const [word, count] of map) {
        if (count > maxCount) {
            maxCount = count
            mostCommonWord = word
        }
    }

    return mostCommonWord
};


//console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])) //"ball"
//console.log(mostCommonWord("a.", [])) //"a"
console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"])) //"ball"