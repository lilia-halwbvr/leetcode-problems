var countSeniors = function (details) {
    let count = 0
    for (let detail of details) {
        let ageStr = detail.substring(11, 13)
        let age = parseInt(ageStr)
        if (age > 60) {
            count++
        }
    }
    return count
};

console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])) //2
console.log(countSeniors(["1313579440F2036", "2921522980M5644"])) //0