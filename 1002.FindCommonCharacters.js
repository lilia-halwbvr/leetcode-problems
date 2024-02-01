var commonChars = function(words) {
    let answer = []
    let wordsInArr = []

    for(let i = 0; i < words.length; i++) {
        let map = new Map()
        for(let j = 0; j < words[i].length; j++) {
            map.set(words[i][j], (map.get(words[i][j]) || 0) + 1)
        }
        wordsInArr.push(map)
    }

    let firstWord = wordsInArr[0]
    for(let [key, value] of firstWord) {
        for(let i = 1; i < wordsInArr.length; i++) {
            firstWord.set(key, Math.min(firstWord.get(key), wordsInArr[i].get(key) || 0))
        }
    }

    firstWord.forEach((value, key) => {
        for (let i = 0; i < value; i++) {
          answer.push(key);
        }
      });
   
    return answer
};

 

console.log(commonChars(["bella","label","roller"])) //["e","l","l"]
console.log(commonChars(["cool","lock","cook"])) //["c","o"]
