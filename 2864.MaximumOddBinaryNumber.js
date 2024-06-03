var maximumOddBinaryNumber = function(s) {
    s = s.split('').sort().reverse()
    s.shift()
    s.push('1')
    return s.join('')

};

console.log(maximumOddBinaryNumber("010")) //"001"
console.log(maximumOddBinaryNumber("0101")) //"1001"
