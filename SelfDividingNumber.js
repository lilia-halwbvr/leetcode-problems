function isDividingNumber(number) {
    // наверное это надо в цикл обернуть и как все числа поделятся вернуть true сели нет то false
    let number2 = number
    while (number2) {
        let lastNumber = number2 % 10

        if (number % lastNumber === 0) {
            number2 = Math.floor(number2 / 10)
        } else {
            return false
        }
    }
    return true
}

// 1 отделяем посл число и делим его на себя, если делится то берем второе число делим его на себя
// если делится берем третье итд


console.log(isDividingNumber(22))
console.log(isDividingNumber(23))
console.log(isDividingNumber(55))
console.log(isDividingNumber(56))