var lemonadeChange = function (bills) {
    let fives = 0
    let tens = 0

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fives++;
        } else if (bills[i] === 10) {
            if (fives > 0) {
                fives--
                tens++
            } else {
                return false
            }
        } else if (bills[i] === 20) {
            if (tens > 0 && fives > 0) {
                tens--
                fives--
            } else if (fives >= 3) {
                fives -= 3
            } else {
                return false
            }
        }
    }

    return true
};

console.log(lemonadeChange([5, 5, 5, 10, 20])) //true
console.log(lemonadeChange([5, 5, 10, 10, 20])) //false