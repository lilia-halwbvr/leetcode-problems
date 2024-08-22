var findComplement = function (num) {
    let binary = num.toString(2)
    let reverse = ''
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '1') {
            reverse += 0
        } else {
            reverse += 1
        }
    }

    return parseInt(reverse, 2)
};

console.log(findComplement(5)) //2
console.log(findComplement(1)) //0