// Given a string s consisting of lowercase English letters, 
// return the first letter to appear twice.

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

var repeatedCharacter = function(s) {
    let checkedNumbers = {}

    for(let i = 0; i < s.length; i++) {
        if(checkedNumbers.hasOwnProperty(s[i])) {
            return s[i]
        } 
            checkedNumbers[s[i]] = 1
        
    }
    
};

// нужно в цикле сравнивать есть ли уже такое значение в массиве если да то вернуть букву если нет положить новое значение в массив
console.log(repeatedCharacter("abczcbaacz")) // c
console.log(repeatedCharacter("abcdd"))


