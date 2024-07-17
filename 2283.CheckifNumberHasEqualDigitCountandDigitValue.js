var digitCount = function (num) {
    num = num.split('')

    for (let i = 0; i < num.length; i++) {
        let count = num.filter((el) => i == el).length
        if (Number(num[i]) !== count) {
            return false
        }
    }
    return true
};

console.log(digitCount("1210")) //true
console.log(digitCount('030')) //false