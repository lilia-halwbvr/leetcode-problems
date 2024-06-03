var findLucky = function(arr) {
    let map = new Map()

    for(num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
   let luckyNums = []
    for(let [key, value] of map) {
        if( key === value) {
            luckyNums.push(key)
        }
    }
    luckyNums.sort((a, b) => a - b)
    return luckyNums.length ? luckyNums[luckyNums.length - 1] : -1
};

console.log(findLucky([2,2,3,4])) //2
console.log(findLucky([1,2,2,3,3,3])) //3
console.log(findLucky([2,2,2,3,3])) //-1