var sortSentence = function(s) {
    const arr = s.split(' ')
    let answer = s.split(' ')
    
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i][arr[i].length - 1]
        let word = arr[i].slice(0, -1)
        answer.splice(num - 1, 1, word)
    }

    return answer.join(' ')
    
};


console.log(sortSentence("is2 sentence4 This1 a3"))// "This is a sentence"
console.log(sortSentence("Myself2 Me1 I4 and3"))//"Me Myself and I"