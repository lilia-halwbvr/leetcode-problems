var frequencySort = function (nums) {
    let map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    return nums.sort((a, b) => {
        if (map.get(a) === map.get(b)) {
            return b - a
        }
        return map.get(a) - map.get(b)
    })
};

console.log(frequencySort([1, 1, 2, 2, 2, 3])) //[3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])) //[1,3,3,2,2]