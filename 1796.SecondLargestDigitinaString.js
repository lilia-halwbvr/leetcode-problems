var secondHighest = function (s) {
    s = s.split('')
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let nums = []

    for (let i = 0; i < s.length; i++) {
        if (numbers.includes(s[i])) {
            nums.push(Number(s[i]))
        }
    }

    let set = new Set(nums)
    set = Array.from(set)
    set = set.sort((a, b) => b - a);

    return set.length > 1 ? set[1] : -1
};


console.log(secondHighest("dfa12321afd")) //2
console.log(secondHighest("abc1111")) //-1