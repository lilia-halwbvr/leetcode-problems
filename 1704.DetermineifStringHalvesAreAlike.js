var halvesAreAlike = function(s) {
    let mid = s.length / 2
    let vowelsCount = 0
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    for(let i = 0; i < mid; i++) {
        if(vowels.has(s[i])) {
            vowelsCount+=1
        }
        if(vowels.has(s[mid + i])) {
            vowelsCount-=1
        }
    }

    return vowelsCount === 0
};

console.log(halvesAreAlike("book")) //true
console.log(halvesAreAlike("textbook")) //false