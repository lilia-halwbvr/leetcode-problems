var kthDistinct = function (arr, k) {
    let map = new Map()
    for (let str of arr) {
        map.set(str, (map.get(str) || 0) + 1)
    }
    let distinct = []
    for (let [key, value] of map) {
        if (value === 1) {
            distinct.push(key)
        }
    }
    return distinct[k - 1]
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)) //'a'
console.log(kthDistinct(["aaa", "aa", "a"], 1)) //'aa'