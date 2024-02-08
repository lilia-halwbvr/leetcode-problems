var sequentialDigits = function(low, high) {
    let answer = []

    for(let i = 1; i <= 9; i++) {
        let num = i
        for(let j = i + 1; j <= 9; j++) {
            num = num * 10 + j
            console.log(num)
            if(num >= low && num <= high) {
                answer.push(num)
            }
        }
    }
    return answer.sort((a, b) => a - b)
};

console.log(sequentialDigits(100, 300)) //[123,234]
console.log(sequentialDigits(1000, 13000)) //[1234,2345,3456,4567,5678,6789,12345]