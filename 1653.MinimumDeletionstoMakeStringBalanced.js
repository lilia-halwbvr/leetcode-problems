var minimumDeletions = function (s) {
    let deletions = 0
    let count = 0
    for (let letter of s) {
        if (letter == 'b') {
            count++
        } else if (letter == 'a' && count > 0) {
            count--
            deletions++
        }
    }
    return deletions
};

console.log(minimumDeletions("aababbab")) //2
console.log(minimumDeletions("bbaaaaabb")) //2