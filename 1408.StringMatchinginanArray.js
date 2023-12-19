var stringMatching = function(words) {
    let result = []
    for(let i = 0; i < words.length; i++) {
       for(let j = 0; j < words.length; j++) {
            if(i !== j && words[j].includes(words[i])) {
                result.push(words[i])
                break
            }
        }
    }       

    return result
};

console.log(stringMatching(["mass","as","hero","superhero"])) //["as","hero"]
console.log(stringMatching(["leetcode","et","code"])) //["et","code"]
console.log(stringMatching(["blue","green","bu"])) //[]