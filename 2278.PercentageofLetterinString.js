var percentageLetter = function (s, letter) {
    let count = 0
    for (let l of s) {
        if (l === letter) count++
    }
    return Math.floor((count / s.length) * 100)
};

console.log(percentageLetter("foobar", "o")) //33
console.log(percentageLetter("jjjj", "k")) //0