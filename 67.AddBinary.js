var addBinary = function(a, b) {
    let num1 = toDecimal(BigInt(a));
    let num2 = toDecimal(BigInt(b));
    return toBinary(num1 + num2);
};


function toBinary(n) {
    let str = '';
    while(n >= 1) {
        str += n % 2;
        n = Math.floor(n / 2);
    }
    return str === '' ? '0' : str.split('').reverse().join('');
}

function toDecimal(n) {
    let str = 0;
    let i = 0;
    while (n > 0) {
        let num = n % BigInt(10);
        str += num * Math.pow(2, i);
        n = Math.floor(n / 10);
        i++;
    }

    return str;
}


console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")) // "0" 
console.log(addBinary("1010", "1011")) // "10101"