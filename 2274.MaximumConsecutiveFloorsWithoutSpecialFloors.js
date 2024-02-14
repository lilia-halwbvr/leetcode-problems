var maxConsecutive = function(bottom, top, special) {
    special.push(top + 1, bottom - 1);
    special.sort((a, b) => a - b);
    let maxNum = 0
    for(let i = 1; i < special.length; i++) {
        maxNum = Math.max(maxNum, special[i] - special[i-1] - 1)
    }
    return maxNum
};

console.log(maxConsecutive(2, 9, [4,6])) //3
console.log(maxConsecutive(6, 8, [7,6,8])) //0