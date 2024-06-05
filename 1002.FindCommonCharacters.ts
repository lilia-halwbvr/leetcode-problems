function commonChars(words: string[]): string[] {
let ans = []
for(let letter of  words[0]){
    if(words.every((word) => word.includes(letter))) {
        ans.push(letter)
        words = words.map((word) => word.replace(letter, ''))
    }
}
return ans
};

console.log(commonChars(["bella","label","roller"])) //["e","l","l"]
console.log(commonChars(["cool","lock","cook"])) //["c","o"]