var getSneakyNumbers = function (nums) {
    let map = new Map()

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let ans = []

    for (let [key, value] of map) {
        if (value === 2) {
            ans.push(key)
        }
    }

    return ans
};

console.log(getSneakyNumbers([0, 1, 1, 0])) //[0,1]
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])) //[2,3]